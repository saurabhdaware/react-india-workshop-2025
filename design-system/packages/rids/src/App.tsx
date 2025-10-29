import { Badge } from "@/components/Badge";
import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import { Textarea } from "@/components/Textarea";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/Card";
import { Label } from "@/components/Label";
import { Checkbox } from "@/components/Checkbox";
import { Separator } from "@/components/Separator";

function App() {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center p-8">
      <div className="w-full max-w-4xl space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">Design System Components</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Badge</CardTitle>
              <CardDescription>
                Various badge variants and styles
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex gap-2 flex-wrap items-center">
                <Badge>Default</Badge>
                <Badge variant="secondary">Secondary</Badge>
                <Badge variant="destructive">Destructive</Badge>
                <Badge variant="outline">Outline</Badge>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Button</CardTitle>
              <CardDescription>
                Various button variants and sizes
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex gap-2 flex-wrap">
                <Button>Default</Button>
                <Button variant="destructive">Destructive</Button>
                <Button variant="outline">Outline</Button>
              </div>
              <div className="flex gap-2 flex-wrap">
                <Button variant="secondary">Secondary</Button>
                <Button variant="ghost">Ghost</Button>
                <Button variant="link">Link</Button>
              </div>
              <div className="flex gap-2 flex-wrap">
                <Button size="sm">Small</Button>
                <Button>Default</Button>
                <Button size="lg">Large</Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Input</CardTitle>
              <CardDescription>Text input with different sizes</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="space-y-2">
                <Label>Default Input</Label>
                <Input placeholder="Enter text..." />
              </div>
              <div className="space-y-2">
                <Label>Small Input</Label>
                <Input placeholder="Small size" inputSize="sm" />
              </div>
              <div className="space-y-2">
                <Label>Large Input</Label>
                <Input placeholder="Large size" inputSize="lg" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Textarea</CardTitle>
              <CardDescription>Multi-line text input</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="space-y-2">
                <Label>Default Textarea</Label>
                <Textarea placeholder="Enter longer text..." />
              </div>
              <div className="space-y-2">
                <Label>Ghost Variant</Label>
                <Textarea placeholder="Ghost variant" variant="ghost" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Form Elements</CardTitle>
              <CardDescription>Labels and checkboxes</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center space-x-2">
                <Checkbox id="terms1" />
                <Label htmlFor="terms1" className="cursor-pointer">
                  Accept terms and conditions
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="terms2" defaultChecked />
                <Label htmlFor="terms2" className="cursor-pointer">
                  Subscribe to newsletter
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="terms3" disabled />
                <Label htmlFor="terms3">Disabled checkbox</Label>
              </div>
            </CardContent>
          </Card>

          <Card className="md:col-span-2">
            <CardHeader>
              <CardTitle>Separator</CardTitle>
              <CardDescription>Visual divider between content</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <p className="text-sm">Content above separator</p>
                <Separator className="my-4" />
                <p className="text-sm">Content below separator</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default App;
