# Button

## Overview

The Button component is a flexible, accessible button element that supports multiple visual variants and sizes. It extends native HTML button functionality with customizable styling through variant props and can be rendered as a child component using Radix UI's Slot composition pattern.

## TypeScript Types

```typescript
type ButtonProps = React.ComponentProps<"button"> & {
  /**
   * The visual style variant of the button
   * @default "default"
   */
  variant?:
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | "link";

  /**
   * The size of the button
   * @default "default"
   */
  size?: "default" | "sm" | "lg" | "icon" | "icon-sm" | "icon-lg";

  /**
   * When true, the button will render as a Slot, allowing you to pass a custom component as a child.
   * Useful for rendering links or other interactive elements with button styling.
   * @default false
   */
  asChild?: boolean;

  /**
   * Additional CSS classes to apply to the button
   */
  className?: string;
};
```

## Usage Examples

### Basic Usage

```tsx
import { Button } from "@saurabhdaware/rids";

function App() {
  return (
    <div>
      {/* Default button */}
      <Button onClick={() => alert("Clicked!")}>Click me</Button>

      {/* Destructive variant */}
      <Button variant="destructive">Delete</Button>

      {/* Outline variant with small size */}
      <Button variant="outline" size="sm">
        Cancel
      </Button>

      {/* Icon button */}
      <Button size="icon">
        <svg>...</svg>
      </Button>
    </div>
  );
}
```

### Using asChild with Links

```tsx
import { Button } from "@saurabhdaware/rids";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <Button asChild>
      <Link to="/dashboard">Go to Dashboard</Link>
    </Button>
  );
}
```
