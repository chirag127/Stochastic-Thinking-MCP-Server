import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { StochasticServer, STOCHASTIC_TOOL } from '../lib.js'

// processAlgorithm writes the formatted box to stderr via console.error.
// Silence it so test output stays clean, and restore afterward.
beforeEach(() => {
  vi.spyOn(console, 'error').mockImplementation(() => {})
})
afterEach(() => {
  vi.restoreAllMocks()
})

const srv = new StochasticServer()

const parseResult = (res) => JSON.parse(res.content[0].text)

describe('validateStochasticData', () => {
  it('returns a normalized object for valid input', () => {
    const out = srv.validateStochasticData({
      algorithm: 'mdp',
      problem: 'route selection',
      parameters: { states: 10 }
    })
    expect(out).toEqual({
      algorithm: 'mdp',
      problem: 'route selection',
      parameters: { states: 10 },
      result: undefined
    })
  })

  it('keeps result when it is a string', () => {
    const out = srv.validateStochasticData({
      algorithm: 'mdp',
      problem: 'p',
      parameters: {},
      result: 'done'
    })
    expect(out.result).toBe('done')
  })

  it('drops result when it is not a string', () => {
    const out = srv.validateStochasticData({
      algorithm: 'mdp',
      problem: 'p',
      parameters: {},
      result: 42
    })
    expect(out.result).toBeUndefined()
  })

  it.each([
    [{ problem: 'p', parameters: {} }, 'Invalid algorithm: must be a string'],
    [{ algorithm: 42, problem: 'p', parameters: {} }, 'Invalid algorithm: must be a string'],
    [{ algorithm: 'mdp', parameters: {} }, 'Invalid problem: must be a string'],
    [{ algorithm: 'mdp', problem: 5, parameters: {} }, 'Invalid problem: must be a string'],
    [{ algorithm: 'mdp', problem: 'p' }, 'Invalid parameters: must be an object'],
    [{ algorithm: 'mdp', problem: 'p', parameters: 'x' }, 'Invalid parameters: must be an object']
  ])('throws on invalid input %#', (input, message) => {
    expect(() => srv.validateStochasticData(input)).toThrow(message)
  })
})

describe('one-line summaries', () => {
  it('mdp uses provided params', () => {
    expect(srv.mdpOneLineSummary({ states: 10, gamma: 0.95 }))
      .toBe('Optimized policy over 10 states with discount factor 0.95')
  })

  it('mdp falls back to defaults', () => {
    expect(srv.mdpOneLineSummary({}))
      .toBe('Optimized policy over N states with discount factor 0.9')
  })

  it('mcts uses provided params', () => {
    expect(srv.mctsOneLineSummary({ simulations: 500, explorationConstant: 2 }))
      .toBe('Explored 500 paths with exploration constant 2')
  })

  it('mcts falls back to defaults', () => {
    expect(srv.mctsOneLineSummary({}))
      .toBe('Explored 1000 paths with exploration constant 1.4')
  })

  it('bandit uses provided params', () => {
    expect(srv.banditOneLineSummary({ strategy: 'ucb', epsilon: 0.2 }))
      .toBe('Selected optimal arm with ucb strategy (ε=0.2)')
  })

  it('bandit falls back to defaults', () => {
    expect(srv.banditOneLineSummary({}))
      .toBe('Selected optimal arm with epsilon-greedy strategy (ε=0.1)')
  })

  it('bayesian uses provided params', () => {
    expect(srv.bayesianOneLineSummary({ acquisitionFunction: 'UCB' }))
      .toBe('Optimized objective with UCB acquisition')
  })

  it('bayesian falls back to defaults', () => {
    expect(srv.bayesianOneLineSummary({}))
      .toBe('Optimized objective with expected improvement acquisition')
  })

  it('hmm uses provided params', () => {
    expect(srv.hmmOneLineSummary({ algorithm: 'viterbi' }))
      .toBe('Inferred hidden states using viterbi algorithm')
  })

  it('hmm falls back to defaults', () => {
    expect(srv.hmmOneLineSummary({}))
      .toBe('Inferred hidden states using forward-backward algorithm')
  })
})

describe('formatOutput', () => {
  it('renders a box containing algorithm, problem and parameters', () => {
    const out = srv.formatOutput({
      algorithm: 'mdp',
      problem: 'route selection',
      parameters: { states: 10, gamma: 0.9 }
    })
    expect(out).toContain('🎲 Algorithm: mdp')
    expect(out).toContain('Problem: route selection')
    expect(out).toContain('• states: 10')
    expect(out).toContain('• gamma: 0.9')
    expect(out).toMatch(/^\n┌/)
    expect(out.trimEnd().endsWith('┘')).toBe(true)
  })

  it('includes a Result row only when result is present', () => {
    const withResult = srv.formatOutput({
      algorithm: 'mdp',
      problem: 'p',
      parameters: {},
      result: 'converged'
    })
    expect(withResult).toContain('Result: converged')

    const withoutResult = srv.formatOutput({
      algorithm: 'mdp',
      problem: 'p',
      parameters: {}
    })
    expect(withoutResult).not.toContain('Result:')
  })
})

describe('processAlgorithm', () => {
  it.each([
    ['mdp', { states: 10, gamma: 0.95 }, 'Optimized policy over 10 states with discount factor 0.95'],
    ['mcts', { simulations: 1000 }, 'Explored 1000 paths with exploration constant 1.4'],
    ['bandit', { strategy: 'epsilon-greedy' }, 'Selected optimal arm with epsilon-greedy strategy (ε=0.1)'],
    ['bayesian', {}, 'Optimized objective with expected improvement acquisition'],
    ['hmm', {}, 'Inferred hidden states using forward-backward algorithm']
  ])('produces a success payload for %s', (algorithm, parameters, summary) => {
    const res = srv.processAlgorithm({ algorithm, problem: 'p', parameters })
    expect(res.isError).toBeUndefined()
    expect(res.content[0].type).toBe('text')
    const payload = parseResult(res)
    expect(payload).toEqual({
      algorithm,
      status: 'success',
      summary,
      hasResult: false
    })
  })

  it('sets hasResult true when a result string is supplied', () => {
    const res = srv.processAlgorithm({
      algorithm: 'mdp',
      problem: 'p',
      parameters: {},
      result: 'converged'
    })
    expect(parseResult(res).hasResult).toBe(true)
  })

  it('returns empty summary for an unknown algorithm (no matching case)', () => {
    const res = srv.processAlgorithm({ algorithm: 'unknown', problem: 'p', parameters: {} })
    const payload = parseResult(res)
    expect(payload.status).toBe('success')
    expect(payload.summary).toBe('')
  })

  it('returns an error payload on invalid input', () => {
    const res = srv.processAlgorithm({ problem: 'p', parameters: {} })
    expect(res.isError).toBe(true)
    const payload = parseResult(res)
    expect(payload.status).toBe('failed')
    expect(payload.error).toBe('Invalid algorithm: must be a string')
  })

  it('writes the formatted box to stderr', () => {
    srv.processAlgorithm({ algorithm: 'mdp', problem: 'p', parameters: {} })
    expect(console.error).toHaveBeenCalledTimes(1)
    expect(console.error.mock.calls[0][0]).toContain('🎲 Algorithm: mdp')
  })
})

describe('STOCHASTIC_TOOL definition', () => {
  it('exposes the expected name and required fields', () => {
    expect(STOCHASTIC_TOOL.name).toBe('stochasticalgorithm')
    expect(STOCHASTIC_TOOL.inputSchema.required).toEqual(['algorithm', 'problem', 'parameters'])
  })

  it('enumerates exactly the five supported algorithms', () => {
    expect(STOCHASTIC_TOOL.inputSchema.properties.algorithm.enum)
      .toEqual(['mdp', 'mcts', 'bandit', 'bayesian', 'hmm'])
  })
})
