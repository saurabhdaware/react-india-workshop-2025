import * as React from "react";
import { type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { inputVariants } from "./variants";

const Input = React.forwardRef<
  HTMLInputElement,
  React.ComponentProps<"input"> & VariantProps<typeof inputVariants>
>(({ className, variant, inputSize, ...props }, ref) => {
  return (
    <input
      ref={ref}
      className={cn(inputVariants({ variant, inputSize, className }))}
      {...props}
    />
  );
});

Input.displayName = "Input";

export { Input };

