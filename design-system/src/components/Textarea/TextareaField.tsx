import * as React from "react";
import { type VariantProps } from "class-variance-authority";
import {
  type Control,
  type FieldPath,
  type FieldValues,
} from "react-hook-form";
import { Textarea } from "./Textarea";
import { textareaVariants } from "./variants";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/Form";

export interface TextareaFieldProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
> extends Omit<React.ComponentProps<"textarea">, "name">,
    VariantProps<typeof textareaVariants> {
  control: Control<TFieldValues>;
  name: TName;
  label?: string;
  description?: string;
}

export function TextareaField<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
>({
  control,
  name,
  label,
  description,
  variant,
  className,
  ...props
}: TextareaFieldProps<TFieldValues, TName>) {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          {label && <FormLabel>{label}</FormLabel>}
          <FormControl>
            <Textarea
              variant={variant}
              className={className}
              {...props}
              {...field}
            />
          </FormControl>
          {description && <FormDescription>{description}</FormDescription>}
          <FormMessage />
        </FormItem>
      )}
    />
  );
}

