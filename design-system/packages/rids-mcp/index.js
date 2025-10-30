import fs from "fs";
import path from "path";
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from "zod";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const KNOWLEDGEBASE_PATH = path.join(__dirname, "knowledgebase");

const server = new McpServer({
  name: "rids-mcp",
  version: "0.0.1",
});

const availableComponent = fs.readdirSync(KNOWLEDGEBASE_PATH);
const availableComponentNames = availableComponent.map((component) =>
  component.replace(".md", "")
);

server.tool(
  "get_docs",
  "Get design system component documentation of rids design system for a given list of components",
  {
    componentNames: z
      .string()
      .describe(
        `Comma separated list of component names. E.g. "Button, Input". Available components ${availableComponentNames.join(
          ", "
        )}`
      ),
  },
  async ({ componentNames }) => {
    const componentNamesArray = componentNames.split(",");
    const componentDocs = componentNamesArray.map((componentName) => {
      const componentDoc = fs.readFileSync(
        path.join(KNOWLEDGEBASE_PATH, `${componentName.trim()}.md`),
        "utf8"
      );
      return componentDoc;
    });
    return {
      content: [
        {
          type: "text",
          text: `Documentations for ${componentNames} are as follows:\n\n${componentDocs.join(
            "\n\n"
          )}`,
        },
      ],
    };
  }
);

const transport = new StdioServerTransport();
await server.connect(transport);
console.error("MCP Server is Running");
