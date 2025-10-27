import { cva } from "class-variance-authority";

const inputVariants = cva(
  "flex w-full rounded-md border border-input bg-background text-base shadow-xs ring-offset-background transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive md:text-sm",
  {
    variants: {
      variant: {
        default: "",
        ghost: "border-transparent shadow-none",
      },
      inputSize: {
        default: "h-9 px-3 py-1",
        sm: "h-8 px-2.5 py-1 text-xs",
        lg: "h-10 px-4 py-2",
      },
    },
    defaultVariants: {
      variant: "default",
      inputSize: "default",
    },
  }
);

export { inputVariants };

