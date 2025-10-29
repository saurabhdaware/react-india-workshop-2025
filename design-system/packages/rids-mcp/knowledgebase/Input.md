# Input

## Overview

The Input component is a flexible text input element that supports multiple visual variants and sizes. It comes in two forms: `Input` for basic usage and `InputField` for form-integrated scenarios with labels, descriptions, and validation support. The `InputField` component seamlessly integrates with react-hook-form for controlled form state management.

## TypeScript Types

### Input

```typescript
type InputProps = React.ComponentProps<"input"> & {
  /**
   * The visual style variant of the input
   * @default "default"
   */
  variant?: "default" | "ghost";

  /**
   * The size of the input
   * @default "default"
   */
  inputSize?: "default" | "sm" | "lg";

  /**
   * Additional CSS classes to apply to the input
   */
  className?: string;
};
```

### InputField

```typescript
interface InputFieldProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
> extends Omit<React.ComponentProps<"input">, "name"> {
  /**
   * React Hook Form control object for controlled input
   * When provided with name, the input will be integrated with react-hook-form
   */
  control?: Control<TFieldValues>;

  /**
   * Field name for form registration
   * Required when using with react-hook-form
   */
  name?: TName;

  /**
   * Label text to display above the input
   */
  label?: string;

  /**
   * Description text to display below the input
   */
  description?: string;

  /**
   * The visual style variant of the input
   * @default "default"
   */
  variant?: "default" | "ghost";

  /**
   * The size of the input
   * @default "default"
   */
  inputSize?: "default" | "sm" | "lg";

  /**
   * Additional CSS classes to apply to the input
   */
  className?: string;
}
```

## Usage Examples

### Basic Input Usage

```tsx
import { Input } from "@saurabhdaware/rids";

function App() {
  return (
    <div>
      {/* Default input */}
      <Input placeholder="Enter your name" />

      {/* Small size input */}
      <Input placeholder="Search..." inputSize="sm" />

      {/* Large input with ghost variant */}
      <Input placeholder="Enter email" variant="ghost" inputSize="lg" />

      {/* Controlled input with state */}
      <Input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
    </div>
  );
}
```

### InputField - Uncontrolled Usage

```tsx
import { InputField } from "@saurabhdaware/rids";

function SignupForm() {
  return (
    <form>
      <InputField
        label="Username"
        name="username"
        placeholder="Enter username"
        description="Choose a unique username"
      />

      <InputField
        label="Email"
        name="email"
        type="email"
        placeholder="your@email.com"
      />
    </form>
  );
}
```

### InputField with React Hook Form

```tsx
import { InputField } from "@saurabhdaware/rids";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const formSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(8, "Password must be at least 8 characters"),
});

function LoginForm() {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (data: z.infer<typeof formSchema>) => {
    console.log(data);
  };

  return (
    <form onSubmit={form.handleSubmit(onSubmit)}>
      <InputField
        control={form.control}
        name="email"
        label="Email"
        type="email"
        placeholder="your@email.com"
        description="We'll never share your email"
      />

      <InputField
        control={form.control}
        name="password"
        label="Password"
        type="password"
        placeholder="Enter password"
      />

      <button type="submit">Submit</button>
    </form>
  );
}
```

### Different Sizes and Variants

```tsx
import { Input, InputField } from "@saurabhdaware/rids";

function InputVariants() {
  return (
    <div className="space-y-4">
      {/* Small input */}
      <InputField label="Small Input" inputSize="sm" placeholder="Small size" />

      {/* Default input */}
      <InputField
        label="Default Input"
        inputSize="default"
        placeholder="Default size"
      />

      {/* Large input */}
      <InputField label="Large Input" inputSize="lg" placeholder="Large size" />

      {/* Ghost variant - borderless */}
      <Input variant="ghost" placeholder="Ghost variant - no border" />
    </div>
  );
}
```
