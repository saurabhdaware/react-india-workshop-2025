# @saurabhdaware/rids

React India Design System - A modern, accessible component library built with React, TypeScript, Tailwind CSS v4, and Radix UI.

## Installation

```bash
npm install @saurabhdaware/rids
# or
pnpm add @saurabhdaware/rids
# or
yarn add @saurabhdaware/rids
```

## Peer Dependencies

Make sure you have these installed in your project:

```bash
npm install react react-dom lucide-react
```

## Setup

### Option 1: With Tailwind CSS (Recommended)

This is the recommended approach for optimal bundle size and customization.

#### 1. Install Tailwind CSS v4

```bash
npm install tailwindcss @tailwindcss/vite
```

#### 2. Configure Vite

```typescript
// vite.config.ts
import tailwindcss from '@tailwindcss/vite'

export default {
  plugins: [
    tailwindcss(),
    // ... other plugins
  ],
}
```

#### 3. Import Tailwind in your CSS

```css
/* src/index.css */
@import "tailwindcss";
```

#### 4. Configure Tailwind to scan the library

```javascript
// tailwind.config.js
export default {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/@saurabhdaware/rids/dist/**/*.{js,mjs}', // 👈 Scan RIDS components
  ],
}
```

#### 5. Use the components

```tsx
// Import from main entry (recommended for most use cases)
import { Button, Card, Input } from '@saurabhdaware/rids'

// Or import individual components for better tree-shaking
import { Button } from '@saurabhdaware/rids/components/Button'
import { Card } from '@saurabhdaware/rids/components/Card'
import { Input } from '@saurabhdaware/rids/components/Input'

function App() {
  return (
    <Card>
      <Input placeholder="Enter text" />
      <Button variant="default">Click me</Button>
    </Card>
  )
}
```

### Option 2: Without Tailwind (Fallback)

If you're not using Tailwind in your project, you'll need to set it up specifically for the library components to work properly. Follow Option 1 above - it's the simplest way to ensure components are styled correctly.

## Available Components

- `Alert` - Alert messages with title and description
- `Button` - Flexible button component with variants
- `Card` - Card container with header, content, and footer
- `Checkbox` - Accessible checkbox input
- `Form` - Form wrapper component
- `Input` - Text input field
- `InputField` - Input with integrated label
- `Label` - Accessible label component
- `Separator` - Visual divider
- `Textarea` - Multi-line text input
- `TextareaField` - Textarea with integrated label

### Utilities

```tsx
import { cn } from '@saurabhdaware/rids'

// Merge Tailwind classes intelligently
const className = cn('px-4 py-2', 'bg-blue-500', userClassName)
```

## Component Examples

### Button

```tsx
import { Button } from '@saurabhdaware/rids'

<Button variant="default">Default</Button>
<Button variant="destructive">Delete</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>
<Button size="sm">Small</Button>
<Button size="lg">Large</Button>
```

### Input

```tsx
import { Input, InputField, Label } from '@saurabhdaware/rids'

// With separate Label
<>
  <Label htmlFor="email">Email</Label>
  <Input id="email" type="email" placeholder="Enter email" />
</>

// Or use InputField (Label + Input combined)
<InputField 
  label="Email" 
  type="email" 
  placeholder="Enter email" 
/>
```

### Card

```tsx
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@saurabhdaware/rids'

<Card>
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
    <CardDescription>Card description goes here</CardDescription>
  </CardHeader>
  <CardContent>
    Your content here
  </CardContent>
  <CardFooter>
    Footer content
  </CardFooter>
</Card>
```

## Import Strategies

### Default Import (Recommended)
```tsx
import { Button, Card, Input } from '@saurabhdaware/rids'
```
Use this for convenience. Modern bundlers will tree-shake unused components automatically.

### Direct Component Import
```tsx
import { Button } from '@saurabhdaware/rids/components/Button'
```
Import individual components for maximum tree-shaking efficiency. This is especially useful if:
- You're only using a few components
- You want to minimize bundle size
- Your bundler doesn't support advanced tree-shaking

### Available Subpath Exports
- `@saurabhdaware/rids/components/Alert`
- `@saurabhdaware/rids/components/Button`
- `@saurabhdaware/rids/components/Card`
- `@saurabhdaware/rids/components/Checkbox`
- `@saurabhdaware/rids/components/Form`
- `@saurabhdaware/rids/components/Input`
- `@saurabhdaware/rids/components/Label`
- `@saurabhdaware/rids/components/Separator`
- `@saurabhdaware/rids/components/Textarea`
- `@saurabhdaware/rids/lib/utils` (for the `cn` utility)

## TypeScript

The library is built with TypeScript and includes full type definitions. All components are fully typed and will provide IntelliSense in your IDE.

## Bundle Size

The library uses a modular architecture where each component is a separate module. This means:
- ✅ Excellent tree-shaking support
- ✅ Import only what you need
- ✅ Smaller bundle sizes for your application
- ✅ Better code splitting opportunities

## Styling & Customization

All components accept a `className` prop for custom styling:

```tsx
<Button className="my-custom-class">
  Custom Button
</Button>
```

The library uses `tailwind-merge` internally, so your custom classes will properly override default ones.

## Development

To work on this library locally:

```bash
# Install dependencies
pnpm install

# Run dev server (for testing components)
pnpm dev

# Build library
pnpm build

# Lint
pnpm lint
```

## License

MIT

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
