import { cva } from "class-variance-authority";

const checkboxVariants = cva(
  "peer size-4 shrink-0 rounded-sm border border-primary shadow-xs focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground"
);

export { checkboxVariants };

