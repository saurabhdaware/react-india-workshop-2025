import { cva } from "class-variance-authority";

const textareaVariants = cva(
  "flex min-h-[60px] w-full rounded-md border border-input bg-background px-3 py-2 text-base shadow-xs ring-offset-background transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive md:text-sm resize-vertical",
  {
    variants: {
      variant: {
        default: "",
        ghost: "border-transparent shadow-none",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export { textareaVariants };

