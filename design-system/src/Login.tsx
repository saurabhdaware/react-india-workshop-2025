import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/Button";
import { InputField } from "@/components/Input";
import { CheckboxField } from "@/components/Checkbox";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/Card";
import { Form } from "@/components/Form";
import { Alert, AlertDescription, AlertTitle } from "@/components/Alert";
import { Separator } from "@/components/Separator";
import { useState } from "react";

const loginSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address" }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters" }),
  rememberMe: z.boolean().optional(),
});

type LoginFormValues = z.infer<typeof loginSchema>;

function Login() {
  const [showAlert, setShowAlert] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
      rememberMe: false,
    },
  });

  const onSubmit = (data: LoginFormValues) => {
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      console.log("Login data:", data);
      setShowAlert(true);
      setIsLoading(false);
      setTimeout(() => setShowAlert(false), 3000);
    }, 1000);
  };

  return (
    <div className="flex min-h-svh items-center justify-center p-4 bg-muted/30">
      <div className="w-full max-w-md space-y-4">
        {showAlert && (
          <Alert variant="success">
            <AlertTitle>Success!</AlertTitle>
            <AlertDescription>
              You have successfully logged in.
            </AlertDescription>
          </Alert>
        )}

        <Card>
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl font-bold">Welcome back</CardTitle>
            <CardDescription>
              Enter your credentials to access your account
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-4"
              >
                <InputField
                  control={form.control}
                  name="email"
                  label="Email"
                  type="email"
                  placeholder="name@example.com"
                />

                <InputField
                  control={form.control}
                  name="password"
                  label="Password"
                  type="password"
                  placeholder="Enter your password"
                />

                <CheckboxField
                  control={form.control}
                  name="rememberMe"
                  label="Remember me"
                />

                <Button type="submit" className="w-full" disabled={isLoading}>
                  {isLoading ? "Signing in..." : "Sign In"}
                </Button>
              </form>
            </Form>

            <div className="relative my-4">
              <Separator />
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-card px-2 text-xs text-muted-foreground">
                Or continue with
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <Button variant="outline" type="button">
                Google
              </Button>
              <Button variant="outline" type="button">
                GitHub
              </Button>
            </div>
          </CardContent>
          <CardFooter className="flex flex-col space-y-2">
            <div className="text-sm text-center text-muted-foreground">
              Don't have an account?{" "}
              <a href="#" className="text-primary hover:underline font-medium">
                Sign up
              </a>
            </div>
            <div className="text-sm text-center">
              <a href="#" className="text-primary hover:underline text-xs">
                Forgot your password?
              </a>
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}

export default Login;
