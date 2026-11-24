// Stochastic Algorithm core logic (transport-agnostic, unit-testable).

export class StochasticServer {
  validateStochasticData (input) {
    const data = input
    if (!data.algorithm || typeof data.algorithm !== 'string') {
      throw new Error('Invalid algorithm: must be a string')
    }
    if (!data.problem || typeof data.problem !== 'string') {
      throw new Error('Invalid problem: must be a string')
    }
    if (!data.parameters || typeof data.parameters !== 'object') {
      throw new Error('Invalid parameters: must be an object')
    }
    return {
      algorithm: data.algorithm,
      problem: data.problem,
      parameters: data.parameters,
      result: typeof data.result === 'string' ? data.result : undefined
    }
  }

  formatOutput (data) {
    const { algorithm, problem, parameters, result } = data
    const border = '─'.repeat(Math.max(algorithm.length + 20, problem.length + 4))
    let output = `
┌${border}┐
│ 🎲 Algorithm: ${algorithm.padEnd(border.length - 13)} │
├${border}┤
│ Problem: ${problem.padEnd(border.length - 10)} │
├${border}┤
│ Parameters:${' '.repeat(border.length - 12)} │`
    for (const [key, value] of Object.entries(parameters)) {
      output += `\n│ • ${key}: ${String(value).padEnd(border.length - key.length - 4)} │`
    }
    if (result) {
      output += `\n├${border}┤
│ Result: ${result.padEnd(border.length - 9)} │`
    }
    output += `\n└${border}┘`
    return output
  }

  mdpOneLineSummary (params) {
    return `Optimized policy over ${params.states || 'N'} states with discount factor ${params.gamma || 0.9}`
  }

  mctsOneLineSummary (params) {
    return `Explored ${params.simulations || 1000} paths with exploration constant ${params.explorationConstant || 1.4}`
  }

  banditOneLineSummary (params) {
    return `Selected optimal arm with ${params.strategy || 'epsilon-greedy'} strategy (ε=${params.epsilon || 0.1})`
  }

  bayesianOneLineSummary (params) {
    return `Optimized objective with ${params.acquisitionFunction || 'expected improvement'} acquisition`
  }

  hmmOneLineSummary (params) {
    return `Inferred hidden states using ${params.algorithm || 'forward-backward'} algorithm`
  }

  processAlgorithm (input) {
    try {
      const validatedInput = this.validateStochasticData(input)
      const formattedOutput = this.formatOutput(validatedInput)
      console.error(formattedOutput)
      let summary = ''
      switch (validatedInput.algorithm) {
        case 'mdp':
          summary = this.mdpOneLineSummary(validatedInput.parameters)
          break
        case 'mcts':
          summary = this.mctsOneLineSummary(validatedInput.parameters)
          break
        case 'bandit':
          summary = this.banditOneLineSummary(validatedInput.parameters)
          break
        case 'bayesian':
          summary = this.bayesianOneLineSummary(validatedInput.parameters)
          break
        case 'hmm':
          summary = this.hmmOneLineSummary(validatedInput.parameters)
          break
      }
      return {
        content: [{
          type: 'text',
          text: JSON.stringify({
            algorithm: validatedInput.algorithm,
            status: 'success',
            summary,
            hasResult: !!validatedInput.result
          }, null, 2)
        }]
      }
    } catch (error) {
      return {
        content: [{
          type: 'text',
          text: JSON.stringify({
            error: error instanceof Error ? error.message : String(error),
            status: 'failed'
          }, null, 2)
        }],
        isError: true
      }
    }
  }
}

// Tool Definition
export const STOCHASTIC_TOOL = {
  name: 'stochasticalgorithm',
  description: `A tool for applying stochastic algorithms to decision-making problems.
Supports various algorithms including:
- Markov Decision Processes (MDPs): Optimize policies over long sequences of decisions
- Monte Carlo Tree Search (MCTS): Simulate future action sequences for large decision spaces
- Multi-Armed Bandit: Balance exploration vs exploitation in action selection
- Bayesian Optimization: Optimize decisions with probabilistic inference
- Hidden Markov Models (HMMs): Infer latent states affecting decision outcomes

Each algorithm provides a systematic approach to handling uncertainty in decision-making.`,
  inputSchema: {
    type: 'object',
    properties: {
      algorithm: {
        type: 'string',
        enum: [
          'mdp',
          'mcts',
          'bandit',
          'bayesian',
          'hmm'
        ]
      },
      problem: { type: 'string' },
      parameters: {
        type: 'object',
        additionalProperties: true
      },
      result: { type: 'string' }
    },
    required: ['algorithm', 'problem', 'parameters']
  }
}
