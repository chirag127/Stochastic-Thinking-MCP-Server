#!/usr/bin/env node
import { Client } from "@modelcontextprotocol/sdk/client/index.js";
import { StdioClientTransport } from "@modelcontextprotocol/sdk/client/stdio.js";

async function main() {
    // Create a client transport that connects to the server
    const transport = new StdioClientTransport({
        command: "node",
        args: ["index.js"],
    });

    // Create a client
    const client = new Client({
        name: "stochastic-thinking-test-client",
        version: "0.1.0",
    });

    try {
        // Connect to the server
        await client.connect(transport);
        console.log("Connected to server");

        // List available tools
        const tools = await client.listTools();
        console.log("Available tools:", JSON.stringify(tools, null, 2));

        // Test MDP algorithm
        console.log("\nTesting MDP algorithm...");
        const mdpResult = await client.callTool({
            name: "stochasticalgorithm",
            arguments: {
                algorithm: "mdp",
                problem: "Optimize route selection for delivery vehicles",
                parameters: {
                    states: 10,
                    gamma: 0.95,
                    learningRate: 0.1,
                },
            },
        });
        console.log("MDP Result:", JSON.stringify(mdpResult, null, 2));

        // Test MCTS algorithm
        console.log("\nTesting MCTS algorithm...");
        const mctsResult = await client.callTool({
            name: "stochasticalgorithm",
            arguments: {
                algorithm: "mcts",
                problem: "Chess move selection",
                parameters: {
                    simulations: 1000,
                    explorationConstant: 1.4,
                    maxDepth: 10,
                },
            },
        });
        console.log("MCTS Result:", JSON.stringify(mctsResult, null, 2));

        // Test Bandit algorithm
        console.log("\nTesting Bandit algorithm...");
        const banditResult = await client.callTool({
            name: "stochasticalgorithm",
            arguments: {
                algorithm: "bandit",
                problem: "A/B testing for website layouts",
                parameters: {
                    strategy: "epsilon-greedy",
                    epsilon: 0.1,
                    arms: 5,
                },
            },
        });
        console.log("Bandit Result:", JSON.stringify(banditResult, null, 2));

        // Test Bayesian Optimization algorithm
        console.log("\nTesting Bayesian Optimization algorithm...");
        const bayesianResult = await client.callTool({
            name: "stochasticalgorithm",
            arguments: {
                algorithm: "bayesian",
                problem: "Hyperparameter tuning for machine learning model",
                parameters: {
                    acquisitionFunction: "expected improvement",
                    dimensions: 3,
                    iterations: 50,
                },
            },
        });
        console.log(
            "Bayesian Result:",
            JSON.stringify(bayesianResult, null, 2)
        );

        // Test HMM algorithm
        console.log("\nTesting HMM algorithm...");
        const hmmResult = await client.callTool({
            name: "stochasticalgorithm",
            arguments: {
                algorithm: "hmm",
                problem: "Speech recognition state inference",
                parameters: {
                    algorithm: "forward-backward",
                    states: 5,
                    observations: 100,
                },
            },
        });
        console.log("HMM Result:", JSON.stringify(hmmResult, null, 2));
    } catch (error) {
        console.error("Error:", error);
    } finally {
        // Clean up
        transport.close();
    }
}

main().catch((error) => {
    console.error("Fatal error:", error);
    process.exit(1);
});
