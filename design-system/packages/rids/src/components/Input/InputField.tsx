import * as React from "react";
import { type VariantProps } from "class-variance-authority";
import {
  type Control,
  type FieldPath,
  type FieldValues,
} from "react-hook-form";
import { Input } from "./Input";
import { inputVariants } from "./variants";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/Form";

export interface InputFieldProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
> extends Omit<React.ComponentProps<"input">, "name">,
    VariantProps<typeof inputVariants> {
  control?: Control<TFieldValues>;
  name?: TName;
  label?: string;
  description?: string;
}

export function InputField<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
>({
  control,
  name,
  label,
  description,
  variant,
  inputSize,
  className,
  ...props
}: InputFieldProps<TFieldValues, TName>) {
  // If control is provided, use react-hook-form integration
  if (control && name) {
    return (
      <FormField
        control={control}
        name={name}
        render={({ field }) => (
          <FormItem>
            {label && <FormLabel>{label}</FormLabel>}
            <FormControl>
              <Input
                variant={variant}
                inputSize={inputSize}
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

  // Otherwise, render a simple uncontrolled input
  return (
    <FormItem>
      {label && <FormLabel>{label}</FormLabel>}
      <FormControl>
        <Input
          variant={variant}
          inputSize={inputSize}
          className={className}
          {...props}
        />
      </FormControl>
      {description && <FormDescription>{description}</FormDescription>}
      <FormMessage />
    </FormItem>
  );
}
