# Textarea

## Overview

The Textarea component is a flexible multi-line text input element that supports multiple visual variants. It comes in two forms: `Textarea` for basic usage and `TextareaField` for form-integrated scenarios with labels, descriptions, and validation support. The `TextareaField` component seamlessly integrates with react-hook-form for controlled form state management.

## TypeScript Types

### Textarea

```typescript
type TextareaProps = React.ComponentProps<"textarea"> & {
  /**
   * The visual style variant of the textarea
   * @default "default"
   */
  variant?: "default" | "ghost";

  /**
   * Additional CSS classes to apply to the textarea
   */
  className?: string;
};
```

### TextareaField

```typescript
interface TextareaFieldProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
> extends Omit<React.ComponentProps<"textarea">, "name"> {
  /**
   * React Hook Form control object for controlled textarea
   * When provided with name, the textarea will be integrated with react-hook-form
   */
  control?: Control<TFieldValues>;

  /**
   * Field name for form registration
   * Required when using with react-hook-form
   */
  name?: TName;

  /**
   * Label text to display above the textarea
   */
  label?: string;

  /**
   * Description text to display below the textarea
   */
  description?: string;

  /**
   * The visual style variant of the textarea
   * @default "default"
   */
  variant?: "default" | "ghost";

  /**
   * Additional CSS classes to apply to the textarea
   */
  className?: string;
}
```

## Usage Examples

### Basic Textarea Usage

```tsx
import { Textarea } from "@saurabhdaware/rids";

function CommentBox() {
  const [comment, setComment] = React.useState("");

  return (
    <div>
      <Textarea
        placeholder="Write your comment..."
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        rows={4}
      />
      <p className="text-sm text-muted-foreground mt-2">
        {comment.length} characters
      </p>
    </div>
  );
}
```

### TextareaField - Uncontrolled Usage

```tsx
import { TextareaField } from "@saurabhdaware/rids";

function FeedbackForm() {
  return (
    <form>
      <TextareaField
        name="feedback"
        label="Your Feedback"
        placeholder="Tell us what you think..."
        description="Help us improve by sharing your thoughts"
        rows={5}
      />

      <TextareaField
        name="suggestions"
        label="Suggestions"
        placeholder="Any suggestions for improvement?"
        rows={3}
      />
    </form>
  );
}
```

### TextareaField with React Hook Form

```tsx
import { TextareaField, Button } from "@saurabhdaware/rids";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const formSchema = z.object({
  title: z.string().min(5, "Title must be at least 5 characters"),
  description: z.string().min(20, "Description must be at least 20 characters"),
  notes: z.string().optional(),
});

function CreatePostForm() {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      description: "",
      notes: "",
    },
  });

  const onSubmit = (data: z.infer<typeof formSchema>) => {
    console.log(data);
  };

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
      <InputField
        control={form.control}
        name="title"
        label="Post Title"
        placeholder="Enter a title"
      />

      <TextareaField
        control={form.control}
        name="description"
        label="Description"
        placeholder="Describe your post"
        description="Write a detailed description of your post"
        rows={6}
      />

      <TextareaField
        control={form.control}
        name="notes"
        label="Additional Notes"
        placeholder="Any additional information (optional)"
        rows={3}
      />

      <Button type="submit">Create Post</Button>
    </form>
  );
}
```

### Ghost Variant (Borderless)

```tsx
import { Textarea } from "@saurabhdaware/rids";

function MinimalEditor() {
  return (
    <div className="w-full">
      <Textarea
        variant="ghost"
        placeholder="Start typing..."
        className="min-h-[200px] text-lg"
      />
    </div>
  );
}
```

### Character Counter with Textarea

```tsx
import { TextareaField } from "@saurabhdaware/rids";
import { useForm } from "react-hook-form";

function TweetComposer() {
  const form = useForm({
    defaultValues: {
      tweet: "",
    },
  });

  const tweetValue = form.watch("tweet");
  const maxLength = 280;
  const remaining = maxLength - tweetValue.length;

  return (
    <form className="space-y-2">
      <TextareaField
        control={form.control}
        name="tweet"
        label="What's happening?"
        placeholder="Share your thoughts..."
        maxLength={maxLength}
        rows={4}
      />
      
      <div className="flex justify-between items-center">
        <span
          className={`text-sm ${
            remaining < 20 ? "text-destructive" : "text-muted-foreground"
          }`}
        >
          {remaining} characters remaining
        </span>
        <button
          type="submit"
          disabled={tweetValue.length === 0 || remaining < 0}
        >
          Tweet
        </button>
      </div>
    </form>
  );
}
```

