# Separator

## Overview

The Separator component is a visual divider built on Radix UI primitives. It can be used horizontally or vertically to separate content sections. The component is accessible and semantically correct, supporting both decorative and semantic separator use cases.

## TypeScript Types

```typescript
type SeparatorProps = React.ComponentPropsWithoutRef<typeof SeparatorPrimitive.Root> & {
  /**
   * The orientation of the separator
   * @default "horizontal"
   */
  orientation?: "horizontal" | "vertical";

  /**
   * Whether the separator is decorative (not announced by screen readers)
   * @default true
   */
  decorative?: boolean;

  /**
   * Additional CSS classes to apply to the separator
   */
  className?: string;
};
```

## Usage Examples

### Horizontal Separator (Default)

```tsx
import { Separator } from "@saurabhdaware/rids";

function ContentSection() {
  return (
    <div>
      <h2>Section Title</h2>
      <p>Some content here</p>
      
      <Separator className="my-4" />
      
      <h2>Another Section</h2>
      <p>More content here</p>
    </div>
  );
}
```

### Vertical Separator

```tsx
import { Separator } from "@saurabhdaware/rids";

function Toolbar() {
  return (
    <div className="flex h-10 items-center space-x-4">
      <button>Cut</button>
      <Separator orientation="vertical" />
      <button>Copy</button>
      <Separator orientation="vertical" />
      <button>Paste</button>
    </div>
  );
}
```

### In Card Layout

```tsx
import { Card, CardHeader, CardTitle, CardContent, Separator } from "@saurabhdaware/rids";

function UserProfile() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Profile Information</CardTitle>
      </CardHeader>
      
      <Separator />
      
      <CardContent className="pt-6">
        <div className="space-y-4">
          <div>
            <p className="text-sm text-muted-foreground">Name</p>
            <p className="text-base font-medium">John Doe</p>
          </div>
          
          <Separator />
          
          <div>
            <p className="text-sm text-muted-foreground">Email</p>
            <p className="text-base font-medium">john@example.com</p>
          </div>
          
          <Separator />
          
          <div>
            <p className="text-sm text-muted-foreground">Location</p>
            <p className="text-base font-medium">San Francisco, CA</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
```

### In Navigation Menu

```tsx
import { Separator } from "@saurabhdaware/rids";

function NavigationMenu() {
  return (
    <nav className="space-y-1">
      <a href="/dashboard" className="block px-4 py-2">Dashboard</a>
      <a href="/projects" className="block px-4 py-2">Projects</a>
      <a href="/tasks" className="block px-4 py-2">Tasks</a>
      
      <Separator className="my-2" />
      
      <a href="/settings" className="block px-4 py-2">Settings</a>
      <a href="/help" className="block px-4 py-2">Help</a>
      
      <Separator className="my-2" />
      
      <a href="/logout" className="block px-4 py-2 text-red-600">Logout</a>
    </nav>
  );
}
```

