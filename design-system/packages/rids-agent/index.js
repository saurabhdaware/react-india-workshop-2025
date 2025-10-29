import { createAgent } from "langchain";
import { ChatGoogleGenerativeAI } from "@langchain/google-genai";
import { MultiServerMCPClient } from "@langchain/mcp-adapters";

import { config } from "dotenv";

config({ path: ".env", override: true });

// Create client and connect to server
const client = new MultiServerMCPClient({
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
    "rids-mcp": {
      transport: "stdio",
      command: "node",
      args: [
        "/Users/saurabhdaware/Desktop/react-india-workshop/design-system/packages/rids-mcp/index.js",
      ],
    },
  },
});

const tools = await client.getTools();

const model = new ChatGoogleGenerativeAI({
  model: "gemini-2.5-flash",
  maxOutputTokens: 2048,
});

// Create the React agent
const agent = createAgent({
  model,
  tools,
});

// Run the agent
try {
  const mathResponse = await agent.invoke({
    messages: [
      { role: "user", content: "How to use the Button component in rids?" },
    ],
  });
  console.log(mathResponse);
} catch (error) {
  console.error("Error during agent execution:", error);
  // Tools throw ToolException for tool-specific errors
  if (error.name === "ToolException") {
    console.error("Tool execution failed:", error.message);
  }
}

await client.close();
