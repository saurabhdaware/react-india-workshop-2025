import path from "path";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import { viteStaticCopy } from "vite-plugin-static-copy";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    dts({
      include: ["src/index.ts", "src/components/**/*", "src/lib/**/*"],
      exclude: [
        "src/**/*.stories.tsx",
        "src/**/*.test.tsx",
        "src/App.tsx",
        "src/main.tsx",
        "src/Login.tsx",
      ],
      tsconfigPath: "./tsconfig.app.json",
      rollupTypes: false, // Keep separate .d.ts files to match preserved structure
    }),
    viteStaticCopy({
      targets: [
        {
          src: "src/index.css",
          dest: ".",
        },
      ],
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    copyPublicDir: false, // Don't copy public assets in library mode
    lib: {
      entry: path.resolve(__dirname, "src/index.ts"),
      formats: ["es"],
    },
    rollupOptions: {
      // Externalize dependencies that shouldn't be bundled
      external: [
        "react",
        "react-dom",
        "react/jsx-runtime",
        "lucide-react",
        /@radix-ui\/.*/,
        "class-variance-authority",
        "clsx",
        "tailwind-merge",
        "react-hook-form",
        "@hookform/resolvers",
        "zod",
      ],
      output: {
        // Preserve original file structure for better tree-shaking
        preserveModules: true,
        preserveModulesRoot: "src",
        entryFileNames: "[name].js",
        assetFileNames: "[name][extname]",
      },
    },
    sourcemap: true,
    cssCodeSplit: false, // Bundle all CSS into a single file
  },
});
