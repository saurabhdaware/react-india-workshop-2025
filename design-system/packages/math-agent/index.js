// @ts-check
import Fastify from "fastify";
import { createAgent } from "langchain";
// import { ChatOpenAI } from "@langchain/openai";
import { ChatGoogleGenerativeAI } from "@langchain/google-genai";
import { MultiServerMCPClient } from "@langchain/mcp-adapters";
import { config } from "dotenv";

config({ path: "./.env", override: true });

// Create Fastify server
const fastify = Fastify({
  logger: true,
});

// Initialize agent
let agent;
let client;

async function initializeAgent() {
  // Create client and connect to server
  client = new MultiServerMCPClient({
    // Global tool configuration options
    // Whether to throw on errors if a tool fails to load (optional, default: true)
    throwOnLoadError: true,
    // Whether to prefix tool names with the server name (optional, default: false)
    prefixToolNameWithServerName: false,
    // Optional additional prefix for tool names (optional, default: "")
    additionalToolNamePrefix: "",

    // Use standardized content block format in tool outputs
    useStandardContentBlocks: true,

    // Server configuration
    mcpServers: {
      // adds a STDIO connection to a server named "math"
      math: {
        transport: "stdio",
        command: "node",
        args: [
          "/Users/saurabhdaware/Desktop/react-india-workshop/design-system/packages/math-mcp/index.js",
        ],
        // Restart configuration for stdio transport
        restart: {
          enabled: true,
          maxAttempts: 3,
          delayMs: 1000,
        },
      },
    },
  });

  const tools = await client.getTools();

  // Create an OpenAI model
  // const model = new ChatOpenAI({
  //   model: "gpt-4o",
  //   temperature: 0,
  // });

  const model = new ChatGoogleGenerativeAI({
    model: "gemini-2.5-flash",
    temperature: 0,
  });

  // Create the React agent
  agent = createAgent({
    model: model,
    tools,
  });

  console.log("Agent initialized successfully");
}

// Define the /agent endpoint
fastify.post("/agent", async (request, reply) => {
  try {
    const { prompt } = request.body;

    if (!prompt) {
      return reply.status(400).send({ error: "Prompt is required" });
    }

    // Run the agent
    const agentResponse = await agent.invoke({
      messages: [{ role: "user", content: prompt }],
    });

    // Extract the final response
    const messages = agentResponse.messages.map((msg) => ({
      type: msg._getType(),
      content: msg.content,
    }));

    return {
      response:
        agentResponse.messages[agentResponse.messages.length - 1].content,
      messages,
    };
  } catch (error) {
    console.error("Error during agent execution:", error);
    // Tools throw ToolException for tool-specific errors
    if (error.name === "ToolException") {
      return reply
        .status(500)
        .send({ error: "Tool execution failed", message: error.message });
    }
    return reply
      .status(500)
      .send({ error: "Agent execution failed", message: error.message });
  }
});

// Start server
const start = async () => {
  try {
    await initializeAgent();
    await fastify.listen({ port: 3000, host: "0.0.0.0" });
    console.log("Server listening on http://localhost:3000");
  } catch (err) {
    fastify.log.error(err);
    await client?.close();
    process.exit(1);
  }
};

// Handle graceful shutdown
process.on("SIGINT", async () => {
  console.log("\nShutting down gracefully...");
  await client?.close();
  await fastify.close();
  process.exit(0);
});

start();
