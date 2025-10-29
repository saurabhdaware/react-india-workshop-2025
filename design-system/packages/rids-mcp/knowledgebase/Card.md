# Card

## Overview

The Card component is a versatile container element used to group related content and actions. It follows a compositional pattern with multiple sub-components (`CardHeader`, `CardTitle`, `CardDescription`, `CardContent`, `CardFooter`) that can be combined to create different card layouts. Cards are commonly used for displaying information blocks, user profiles, product details, and dashboard widgets.

## TypeScript Types

### Card

```typescript
type CardProps = React.ComponentProps<"div"> & {
  /**
   * The visual style variant of the card
   * @default "default"
   */
  variant?: "default" | "elevated";

  /**
   * Additional CSS classes to apply to the card
   */
  className?: string;
};
```

### CardHeader

```typescript
type CardHeaderProps = React.ComponentProps<"div"> & {
  /**
   * Additional CSS classes to apply to the card header
   */
  className?: string;
};
```

### CardTitle

```typescript
type CardTitleProps = React.ComponentProps<"div"> & {
  /**
   * Additional CSS classes to apply to the card title
   */
  className?: string;
};
```

### CardDescription

```typescript
type CardDescriptionProps = React.ComponentProps<"div"> & {
  /**
   * Additional CSS classes to apply to the card description
   */
  className?: string;
};
```

### CardContent

```typescript
type CardContentProps = React.ComponentProps<"div"> & {
  /**
   * Additional CSS classes to apply to the card content
   */
  className?: string;
};
```

### CardFooter

```typescript
type CardFooterProps = React.ComponentProps<"div"> & {
  /**
   * Additional CSS classes to apply to the card footer
   */
  className?: string;
};
```

## Usage Examples

### Basic Card with Header and Content

```tsx
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@saurabhdaware/rids";

function BasicCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Getting Started</CardTitle>
        <CardDescription>
          Deploy your new project in one-click.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p>
          Start building your application with our comprehensive toolkit and
          best practices.
        </p>
      </CardContent>
    </Card>
  );
}
```

### Card with Footer Actions

```tsx
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
  Button,
} from "@saurabhdaware/rids";

function ProjectCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Project Alpha</CardTitle>
        <CardDescription>Last updated 2 hours ago</CardDescription>
      </CardHeader>
      <CardContent>
        <p>
          A comprehensive dashboard for managing your team's projects and
          tracking progress in real-time.
        </p>
      </CardContent>
      <CardFooter className="gap-2">
        <Button variant="outline">View Details</Button>
        <Button>Open Project</Button>
      </CardFooter>
    </Card>
  );
}
```

### Elevated Card Variant

```tsx
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@saurabhdaware/rids";

function FeaturedCard() {
  return (
    <Card variant="elevated">
      <CardHeader>
        <CardTitle>Featured Plan</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="text-3xl font-bold">$29/month</div>
          <ul className="space-y-2">
            <li>✓ Unlimited projects</li>
            <li>✓ Advanced analytics</li>
            <li>✓ Priority support</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  );
}
```

### User Profile Card

```tsx
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
  Button,
} from "@saurabhdaware/rids";

function UserProfileCard() {
  return (
    <Card className="w-full max-w-sm">
      <CardHeader className="text-center">
        <div className="mx-auto mb-4 h-20 w-20 rounded-full bg-gradient-to-r from-blue-500 to-purple-500" />
        <CardTitle>Sarah Anderson</CardTitle>
        <CardDescription>Product Designer</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Projects</span>
            <span className="font-medium">24</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Followers</span>
            <span className="font-medium">1.2k</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Following</span>
            <span className="font-medium">342</span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="gap-2">
        <Button className="flex-1">Follow</Button>
        <Button variant="outline" className="flex-1">
          Message
        </Button>
      </CardFooter>
    </Card>
  );
}
```

### Simple Card without Sub-components

```tsx
import { Card } from "@saurabhdaware/rids";

function SimpleCard() {
  return (
    <Card className="p-6">
      <h3 className="text-lg font-semibold mb-2">Quick Stats</h3>
      <p className="text-muted-foreground">
        You have 5 new notifications and 3 pending tasks.
      </p>
    </Card>
  );
}
```

