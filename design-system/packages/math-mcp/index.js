// @ts-check
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from "zod/v3";

// Create an MCP server
const server = new McpServer({
  name: "math-mcp",
  version: "1.0.0",
});

// Add an addition tool
server.tool(
  "add",
  "Add two numbers",
  {
    a: z.number().describe("The first number to add"),
    b: z.number().describe("The second number to add"),
  },
  async ({ a, b }) => {
    const output = { result: a + b };
    return {
      content: [{ type: "text", text: JSON.stringify(output) }],
    };
  }
);

const transport = new StdioServerTransport();

await server.connect(transport);
console.error("Math MCP server is running");
