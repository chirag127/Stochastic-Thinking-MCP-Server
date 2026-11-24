import { createServer } from 'node:http'
import { randomUUID } from 'node:crypto'
import { StreamableHTTPServerTransport } from '@modelcontextprotocol/sdk/server/streamableHttp.js'
import { isInitializeRequest } from '@modelcontextprotocol/sdk/types.js'

const log = (...a) => console.error('[stochastic-thinking:http]', ...a)

const CORS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, DELETE, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, mcp-session-id, Accept',
  'Access-Control-Expose-Headers': 'mcp-session-id'
}

function json (res, status, body) {
  res.writeHead(status, { ...CORS, 'Content-Type': 'application/json' })
  res.end(JSON.stringify(body))
}

function readBody (req) {
  return new Promise((resolve, reject) => {
    const chunks = []
    req.on('data', (c) => chunks.push(c))
    req.on('end', () => {
      try {
        resolve(JSON.parse(Buffer.concat(chunks).toString()))
      } catch (e) {
        reject(e)
      }
    })
    req.on('error', reject)
  })
}

export async function startHttpTransport (server, port) {
  const host = process.env.HTTP_HOST || 'localhost'
  port = port ?? (Number(process.env.HTTP_PORT) || 3778)

  const transports = new Map()

  const httpServer = createServer(async (req, res) => {
    const url = new URL(req.url, `http://${req.headers.host}`)
    const path = url.pathname

    if (req.method === 'OPTIONS') {
      res.writeHead(204, CORS)
      res.end()
      return
    }

    if (path === '/health' && req.method === 'GET') {
      json(res, 200, { status: 'ok', server: 'stochastic-thinking-server', version: '0.1.0' })
      return
    }

    if (path !== '/mcp') {
      json(res, 404, { error: 'Not found' })
      return
    }

    try {
      if (req.method === 'POST') {
        const body = await readBody(req)
        const sessionId = req.headers['mcp-session-id']

        let transport
        if (sessionId && transports.has(sessionId)) {
          transport = transports.get(sessionId)
        } else if (!sessionId && isInitializeRequest(body)) {
          log('new session')
          transport = new StreamableHTTPServerTransport({
            sessionIdGenerator: () => randomUUID(),
            onsessioninitialized: (id) => {
              log('session initialized:', id)
              transports.set(id, transport)
            }
          })
          transport.onclose = () => {
            const id = transport.sessionId
            if (id) {
              transports.delete(id)
              log('session closed:', id)
            }
          }
          await server.connect(transport)
        } else {
          json(res, 400, {
            jsonrpc: '2.0',
            error: { code: -32000, message: 'Bad Request: no valid session' },
            id: null
          })
          return
        }

        await transport.handleRequest(req, res, body)
        return
      }

      if (req.method === 'GET') {
        const sessionId = req.headers['mcp-session-id']
        if (sessionId && transports.has(sessionId)) {
          await transports.get(sessionId).handleRequest(req, res)
          return
        }
        json(res, 400, {
          jsonrpc: '2.0',
          error: { code: -32000, message: 'Bad Request: no valid session' },
          id: null
        })
        return
      }

      if (req.method === 'DELETE') {
        const sessionId = req.headers['mcp-session-id']
        if (sessionId && transports.has(sessionId)) {
          const transport = transports.get(sessionId)
          await transport.handleRequest(req, res)
          transports.delete(sessionId)
          log('session deleted:', sessionId)
          return
        }
        json(res, 400, {
          jsonrpc: '2.0',
          error: { code: -32000, message: 'Bad Request: no valid session' },
          id: null
        })
        return
      }

      res.writeHead(405, { ...CORS, Allow: 'GET, POST, DELETE, OPTIONS' })
      res.end('Method Not Allowed')
    } catch (err) {
      log('error:', err.message)
      if (!res.headersSent) {
        json(res, 500, {
          jsonrpc: '2.0',
          error: { code: -32603, message: 'Internal server error' },
          id: null
        })
      }
    }
  })

  return new Promise((resolve, reject) => {
    httpServer.listen(port, host, () => {
      log(`listening on http://${host}:${port}/mcp`)
      resolve(httpServer)
    })
    httpServer.on('error', reject)
  })
}
