# Form

## Overview

The Form component is a comprehensive form management system built on react-hook-form with composable sub-components for creating accessible, validated forms. It provides building blocks like `FormField`, `FormItem`, `FormLabel`, `FormControl`, `FormDescription`, and `FormMessage` that work together to handle form state, validation, and error display. The Form component is the foundation for other field components like `InputField`, `CheckboxField`, and `TextareaField`.

## TypeScript Types

### Form

```typescript
// Form is an alias for FormProvider from react-hook-form
type FormProps = React.ComponentPropsWithoutRef<typeof FormProvider>;
```

### FormField

```typescript
type FormFieldProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
> = ControllerProps<TFieldValues, TName>;
```

### FormItem

```typescript
type FormItemProps = React.ComponentProps<"div"> & {
  /**
   * Additional CSS classes to apply to the form item
   */
  className?: string;
};
```

### FormLabel

```typescript
type FormLabelProps = React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root> & {
  /**
   * Additional CSS classes to apply to the form label
   */
  className?: string;
};
```

### FormControl

```typescript
type FormControlProps = React.ComponentPropsWithoutRef<typeof Slot> & {
  /**
   * The form control element (input, textarea, etc.)
   * Passed as children
   */
  children: React.ReactNode;
};
```

### FormDescription

```typescript
type FormDescriptionProps = React.ComponentProps<"p"> & {
  /**
   * Additional CSS classes to apply to the form description
   */
  className?: string;
};
```

### FormMessage

```typescript
type FormMessageProps = React.ComponentProps<"p"> & {
  /**
   * Additional CSS classes to apply to the form message
   */
  className?: string;

  /**
   * Custom message to display
   * If not provided, displays validation error from react-hook-form
   */
  children?: React.ReactNode;
};
```

## Usage Examples

### Basic Form with Manual Field Construction

```tsx
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Input,
} from "@saurabhdaware/rids";
import { useForm } from "react-hook-form";

function BasicForm() {
  const form = useForm({
    defaultValues: {
      username: "",
      email: "",
    },
  });

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit((data) => console.log(data))}>
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="Enter username" {...field} />
              </FormControl>
              <FormDescription>
                This is your public display name.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <button type="submit">Submit</button>
      </form>
    </Form>
  );
}
```

### Form with Validation (Zod)

```tsx
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Input,
  Checkbox,
} from "@saurabhdaware/rids";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const formSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(8, "Password must be at least 8 characters"),
  confirmPassword: z.string(),
  acceptTerms: z.boolean().refine((val) => val === true, {
    message: "You must accept the terms",
  }),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"],
});

function SignupForm() {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",
      acceptTerms: false,
    },
  });

  const onSubmit = (data: z.infer<typeof formSchema>) => {
    console.log("Form submitted:", data);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input type="email" placeholder="you@example.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input type="password" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="confirmPassword"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Confirm Password</FormLabel>
              <FormControl>
                <Input type="password" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="acceptTerms"
          render={({ field }) => (
            <FormItem className="flex flex-row items-center space-x-2 space-y-0">
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
              <FormLabel>I accept the terms and conditions</FormLabel>
              <FormMessage />
            </FormItem>
          )}
        />

        <button type="submit">Sign Up</button>
      </form>
    </Form>
  );
}
```

### Using Field Components (Recommended)

```tsx
import {
  Form,
  InputField,
  TextareaField,
  CheckboxField,
  Button,
} from "@saurabhdaware/rids";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
  subscribe: z.boolean().optional(),
});

function ContactForm() {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
      subscribe: false,
    },
  });

  const onSubmit = (data: z.infer<typeof formSchema>) => {
    console.log(data);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <InputField
          control={form.control}
          name="name"
          label="Name"
          placeholder="Your name"
          description="We'll use this to address you"
        />

        <InputField
          control={form.control}
          name="email"
          label="Email"
          type="email"
          placeholder="you@example.com"
        />

        <TextareaField
          control={form.control}
          name="message"
          label="Message"
          placeholder="Tell us what's on your mind"
          description="Be as detailed as you'd like"
        />

        <CheckboxField
          control={form.control}
          name="subscribe"
          label="Subscribe to newsletter"
        />

        <Button type="submit">Send Message</Button>
      </form>
    </Form>
  );
}
```

### useFormField Hook

```tsx
import { useFormField } from "@saurabhdaware/rids";

// Custom form component that uses useFormField hook
function CustomFormInput() {
  const { error, formItemId } = useFormField();

  return (
    <input
      id={formItemId}
      className={error ? "border-red-500" : "border-gray-300"}
      aria-invalid={!!error}
    />
  );
}
```

