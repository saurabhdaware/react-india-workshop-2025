import { cva } from "class-variance-authority";

const cardVariants = cva(
  "rounded-xl border bg-card text-card-foreground shadow",
  {
    variants: {
      variant: {
        default: "",
        elevated: "shadow-lg",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export { cardVariants };

