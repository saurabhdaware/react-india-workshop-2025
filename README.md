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
   git clone https://github.com/saurabhdaware/react-india-workshop.git
   ```

2. Open the `app` directory and `design-system` directory in two separate windows of Cursor.

   ```bash
   cd react-india-workshop/
   cursor app/
   cursor design-system/
   ```

## Prompt Engineering

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

- **Advanced: Reason and Act (ReAct)**

  ```md
  First, think step-by-step and decide the best approach to refactor the code. Then, after the reasoning, write the actual refactored code in a code block.
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

---

Rough beyond this line

## Codebase Knowledge

- Cursor codebase indexing
  - Embeddings
  - Vectors
  - Semantic Search
- Cursor rules
- User rules

## Libraries Context

- MCP (Model Context Protocol)

  - Google Calendar MCP Server
  - Creating our own MCP Server
    - get docs tool call
    - scaffold project call

- AI Agents

  - LangGraph
  - LangChain
  - LangSmith

- Make AI agent call from frontend

## Demo

- We want to create an MCP tool that gives the context of our design system to the AI agent.
- We then want to create an AI agent that can be called from a frontend application to help answer questions about the design system.

### Outline

- What are we building?
  - We want to enable AI to use our components and build frontends from just prompts.
- What are Cursor Rules?
  - write `get-weather.mdc` cursor rule
  - write `create-knowledgebase.mdc` cursor rule
- Create knowledgebase for design-system
- What is MCP?
- Create MCP tool that gives the context of our design system to the AI agent
- What are AI Agents?
- Create AI agent that can be called from a frontend application to help answer questions about the design system

## Random Ideas and TODO

- Repo setup
  - [x] Publish own versions of the libraries
- Prepare `main` branch with empty app directory
  - Try out weather cursor rules and prompt engineering demos here `get-weather.mdc`
- BUILD THE FINAL WORKSHOP THING
  - Architecture and Problem Statement Explanation
  - Knowledgebase Creation using Cursor Rule `create-knowledgebase.mdc`
  - What is MCP?
  - Create MCP tool that gives the context of our design system to the AI agent
  - What are AI Agents?
  - Create AI agent that can be called from a frontend application to help answer questions about the design system

Three major sections of workshop

Goal: Build production-grade UIs with Prompts

- Talk
- Talk with Demos that you can play around
- Hands on Workshop where we build AI tools for a design system
