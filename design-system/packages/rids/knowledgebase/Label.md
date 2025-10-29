# Label

## Overview

The Label component is an accessible label element built on Radix UI primitives. It provides proper accessibility features for form inputs and automatically handles the relationship between labels and their associated form controls. It's typically used within Form components but can also be used standalone.

## TypeScript Types

```typescript
type LabelProps = React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root> & {
  /**
   * The ID of the form element this label is associated with
   */
  htmlFor?: string;

  /**
   * Additional CSS classes to apply to the label
   */
  className?: string;
};
```

## Usage Examples

### Basic Label Usage

```tsx
import { Label, Input } from "@saurabhdaware/rids";

function BasicForm() {
  return (
    <div className="space-y-2">
      <Label htmlFor="email">Email Address</Label>
      <Input id="email" type="email" placeholder="you@example.com" />
    </div>
  );
}
```

### Label with Checkbox

```tsx
import { Label, Checkbox } from "@saurabhdaware/rids";

function TermsCheckbox() {
  return (
    <div className="flex items-center space-x-2">
      <Checkbox id="terms" />
      <Label
        htmlFor="terms"
        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        Accept terms and conditions
      </Label>
    </div>
  );
}
```

### Multiple Form Fields with Labels

```tsx
import { Label, Input } from "@saurabhdaware/rids";

function ProfileForm() {
  return (
    <form className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="name">Full Name</Label>
        <Input id="name" placeholder="John Doe" />
      </div>

      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input id="email" type="email" placeholder="john@example.com" />
      </div>

      <div className="space-y-2">
        <Label htmlFor="bio">Bio</Label>
        <Textarea id="bio" placeholder="Tell us about yourself" />
      </div>
    </form>
  );
}
```

