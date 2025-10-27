import { cva } from "class-variance-authority";

// Form doesn't have variants in the traditional sense since it's a wrapper
// But keeping the file for consistency with the component structure
const formVariants = cva("");

export { formVariants };

