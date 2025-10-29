# Checkbox

## Overview

The Checkbox component is an accessible checkbox input built on Radix UI primitives. It comes in two forms: `Checkbox` for basic usage and `CheckboxField` for form-integrated scenarios with labels and descriptions. The `CheckboxField` component seamlessly integrates with react-hook-form for controlled form state management and validation.

## TypeScript Types

### Checkbox

```typescript
type CheckboxProps = React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root> & {
  /**
   * Additional CSS classes to apply to the checkbox
   */
  className?: string;
};
```

### CheckboxField

```typescript
interface CheckboxFieldProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
> extends Omit<React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>, "name"> {
  /**
   * React Hook Form control object for controlled checkbox
   * When provided with name, the checkbox will be integrated with react-hook-form
   */
  control?: Control<TFieldValues>;

  /**
   * Field name for form registration
   * Required when using with react-hook-form
   */
  name?: TName;

  /**
   * Label text to display next to the checkbox
   */
  label?: string;

  /**
   * Description text to display below the checkbox
   */
  description?: string;

  /**
   * Additional CSS classes to apply to the checkbox
   */
  className?: string;
}
```

## Usage Examples

### Basic Checkbox Usage

```tsx
import { Checkbox } from "@saurabhdaware/rids";

function App() {
  const [checked, setChecked] = React.useState(false);

  return (
    <div className="flex items-center space-x-2">
      <Checkbox
        id="terms"
        checked={checked}
        onCheckedChange={setChecked}
      />
      <label
        htmlFor="terms"
        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        Accept terms and conditions
      </label>
    </div>
  );
}
```

### CheckboxField - Uncontrolled Usage

```tsx
import { CheckboxField } from "@saurabhdaware/rids";

function SettingsForm() {
  return (
    <form>
      <CheckboxField
        name="notifications"
        label="Enable notifications"
        description="Receive email notifications about updates"
      />

      <CheckboxField
        name="marketing"
        label="Marketing emails"
        description="Receive promotional content and offers"
      />
    </form>
  );
}
```

### CheckboxField with React Hook Form

```tsx
import { CheckboxField } from "@saurabhdaware/rids";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const formSchema = z.object({
  acceptTerms: z.boolean().refine((val) => val === true, {
    message: "You must accept the terms and conditions",
  }),
  marketing: z.boolean().optional(),
  newsletter: z.boolean().optional(),
});

function SignupForm() {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      acceptTerms: false,
      marketing: false,
      newsletter: true,
    },
  });

  const onSubmit = (data: z.infer<typeof formSchema>) => {
    console.log(data);
  };

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
      <CheckboxField
        control={form.control}
        name="acceptTerms"
        label="I accept the terms and conditions"
        description="You must agree to continue"
      />

      <CheckboxField
        control={form.control}
        name="marketing"
        label="Send me marketing emails"
        description="We'll send you updates about new features"
      />

      <CheckboxField
        control={form.control}
        name="newsletter"
        label="Subscribe to newsletter"
      />

      <button type="submit">Submit</button>
    </form>
  );
}
```

### Multiple Checkboxes with State

```tsx
import { Checkbox } from "@saurabhdaware/rids";

function PreferencesPanel() {
  const [preferences, setPreferences] = React.useState({
    email: true,
    push: false,
    sms: false,
  });

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">Notification Preferences</h3>
      
      <div className="flex items-center space-x-2">
        <Checkbox
          id="email"
          checked={preferences.email}
          onCheckedChange={(checked) =>
            setPreferences({ ...preferences, email: checked === true })
          }
        />
        <label htmlFor="email" className="text-sm">
          Email notifications
        </label>
      </div>

      <div className="flex items-center space-x-2">
        <Checkbox
          id="push"
          checked={preferences.push}
          onCheckedChange={(checked) =>
            setPreferences({ ...preferences, push: checked === true })
          }
        />
        <label htmlFor="push" className="text-sm">
          Push notifications
        </label>
      </div>

      <div className="flex items-center space-x-2">
        <Checkbox
          id="sms"
          checked={preferences.sms}
          onCheckedChange={(checked) =>
            setPreferences({ ...preferences, sms: checked === true })
          }
        />
        <label htmlFor="sms" className="text-sm">
          SMS notifications
        </label>
      </div>
    </div>
  );
}
```

