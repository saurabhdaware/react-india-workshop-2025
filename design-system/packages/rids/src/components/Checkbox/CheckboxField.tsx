import * as React from "react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { type VariantProps } from "class-variance-authority";
import {
  type Control,
  type FieldPath,
  type FieldValues,
} from "react-hook-form";
import { Checkbox } from "./Checkbox";
import { checkboxVariants } from "./variants";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/Form";

export interface CheckboxFieldProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
> extends Omit<
    React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>,
    "name"
  >,
    VariantProps<typeof checkboxVariants> {
  control?: Control<TFieldValues>;
  name?: TName;
  label?: string;
  description?: string;
}

export function CheckboxField<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
>({
  control,
  name,
  label,
  description,
  className,
  ...props
}: CheckboxFieldProps<TFieldValues, TName>) {
  // If control is provided, use react-hook-form integration
  if (control && name) {
    return (
      <FormField
        control={control}
        name={name}
        render={({ field }) => (
          <FormItem className="flex flex-row items-center space-x-2 space-y-0">
            <label className="flex items-center space-x-2 cursor-pointer">
              <FormControl>
                <Checkbox
                  className={className}
                  checked={field.value}
                  onCheckedChange={field.onChange}
                  {...props}
                />
              </FormControl>
              {label && (
                <span className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                  {label}
                </span>
              )}
            </label>
            {description && <FormDescription>{description}</FormDescription>}
            <FormMessage />
          </FormItem>
        )}
      />
    );
  }

  // Otherwise, render a simple uncontrolled checkbox
  return (
    <FormItem className="flex flex-row items-center space-x-2 space-y-0">
      <label className="flex items-center space-x-2 cursor-pointer">
        <FormControl>
          <Checkbox className={className} {...props} />
        </FormControl>
        {label && (
          <span className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
            {label}
          </span>
        )}
      </label>
      {description && <FormDescription>{description}</FormDescription>}
      <FormMessage />
    </FormItem>
  );
}

