# ✨ Vibe Coding Workshop ✨ (React India 2025)

<details>
<summary>Prerequisites</summary>

- Install [Cursor](https://www.cursor.com/) (if you don't already have it)

- Install [Node.js](https://nodejs.org/) 20+ (if you don't already have it. Preferrably 22)

  ```bash
  node --version # to check the version
  ```

- Create an account of https://npmjs.org/ (if you don't already have one)
- Install pnpm (if you don't already have it)

  ```bash
  npm install -g pnpm
  ```

</details>

## Local Setup

1. Clone the repository

   ```bash
   git clone git@github.com:saurabhdaware/react-india-workshop-2025.git
   ```

2. Open the `app` directory and `design-system` directory in two separate windows of Cursor.

   ```bash
   cd react-india-workshop/
   cursor app/
   cursor design-system/
   ```

## Prompt Engineering Tips

- **Be specific and elaborate**

  ```md
  ❌ "Build me a component"

  ✅ "Build a component using React and Styled Components. Use react router for navigation and formik for form validation"
  ```

- **Define role**

  ```md
  "You are a software engineer who works in XYZ org. You work in frontend react applications for building good looking and accessible products"
  ```

- **Give few shots example**

  ```md
  What is the weather in Goa today?

  Few shots examples on how to respond:
  Q: What is the weather today in Bangalore?
  A: It's 28 degree celcius in Bangalore with high chances of rain

  Q: What is the weather today in Mumbai?
  A: It's 32 degree celcius in Mumbai with no chances of rain
  ```

- **Avoid negations (Don't do X, etc)**

  ```md
  ❌ Don't use formik library

  ✅ Use react hook form library
  ```

- **Advanced: Structured Prompting (XML / Markdown)**

  https://docs.claude.com/en/docs/build-with-claude/prompt-engineering/use-xml-tags#example-legal-contract-analysis

  ```md
  ❌ What is the weather in Goa?
  ```

  ```md
  ✅ What is the weather in Goa?

  Respond in given format without any other text:
  <output_format>
  {
  "temperature": {number}, // in celcius
  "chances_of_rain": {"high" | "low" | "medium" | "none"}
  }
  </output_format>
  ```

## Links / Referrences

- [Live Gist](https://gist.github.com/saurabhdaware/e40d8327041a53d273967d2e0d40ea2d) (This will be used for copy-pasting snippets for audience)
- **MCP**
  - [Build MCP Server - Node.js](https://modelcontextprotocol.io/docs/develop/build-server#node)
- **AI Agents**
  - [Google AI Studio / API Keys page](https://aistudio.google.com/api-keys)
  - [LangChain Agents](https://docs.langchain.com/oss/javascript/langchain/overview)
  - [LangChain Gemini](https://www.npmjs.com/package/@langchain/google-genai)
  - [LangChain MCP Adapters](https://www.npmjs.com/package/@langchain/mcp-adapters)
