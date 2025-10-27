import * as React from "react";
import { type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { textareaVariants } from "./variants";

const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  React.ComponentProps<"textarea"> & VariantProps<typeof textareaVariants>
>(({ className, variant, ...props }, ref) => {
  return (
    <textarea
      ref={ref}
      className={cn(textareaVariants({ variant, className }))}
      {...props}
    />
  );
});

Textarea.displayName = "Textarea";

export { Textarea };

