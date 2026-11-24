#!/usr/bin/env node
import { Server } from '@modelcontextprotocol/sdk/server/index.js'
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js'
import {
  CallToolRequestSchema,
  ListToolsRequestSchema,
  McpError,
  ErrorCode
} from '@modelcontextprotocol/sdk/types.js'
import { StochasticServer, STOCHASTIC_TOOL } from './lib.js'

// Server Instance
const stochasticServer = new StochasticServer()
const server = new Server({
  name: 'stochastic-thinking-server',
  version: '0.1.0'
}, {
  capabilities: {
    tools: {
      stochasticalgorithm: STOCHASTIC_TOOL
    }
  }
})

// Request Handlers
server.setRequestHandler(ListToolsRequestSchema, async () => ({
  tools: [STOCHASTIC_TOOL]
}))

server.setRequestHandler(CallToolRequestSchema, async (request) => {
  switch (request.params.name) {
    case 'stochasticalgorithm':
      return stochasticServer.processAlgorithm(request.params.arguments)
    default:
      throw new McpError(ErrorCode.MethodNotFound, `Unknown tool: ${request.params.name}`)
  }
})

async function runServer () {
  if (process.env.HTTP_TRANSPORT === '1') {
    const { startHttpTransport } = await import('./http.js')
    await startHttpTransport(server)
    console.error('Stochastic Thinking MCP Server running on Streamable HTTP')
    return
  }
  const transport = new StdioServerTransport()
  await server.connect(transport)
  console.error('Stochastic Thinking MCP Server running on stdio')
}

runServer().catch((error) => {
  console.error('Fatal error running server:', error)
  process.exit(1)
})
