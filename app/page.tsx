import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            🌸 Flowers by Jan
          </h1>
          <p className="text-xl text-muted-foreground">
            Modern floral theme with shadcn/ui components
          </p>
        </div>

        {/* Color Palette Showcase */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-foreground mb-8">
            Floral Color Palette
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Primary Color Card */}
            <Card>
              <CardHeader>
                <CardTitle className="text-primary">Blush Pink</CardTitle>
                <CardDescription>#EC8B9E</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-32 rounded-md bg-primary mb-4"></div>
                <p className="text-sm text-muted-foreground">
                  Primary color for buttons, links, and accents
                </p>
              </CardContent>
            </Card>

            {/* Secondary Color Card */}
            <Card>
              <CardHeader>
                <CardTitle className="text-secondary">Sage Green</CardTitle>
                <CardDescription>#A8B4A6</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-32 rounded-md bg-secondary mb-4"></div>
                <p className="text-sm text-muted-foreground">
                  Secondary accent color for balanced design
                </p>
              </CardContent>
            </Card>

            {/* Background Color Card */}
            <Card>
              <CardHeader>
                <CardTitle>Cream</CardTitle>
                <CardDescription>#FDFBF7</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-32 rounded-md bg-muted mb-4 border border-input"></div>
                <p className="text-sm text-muted-foreground">
                  Soft neutral background for a warm feel
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Component Showcase */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-foreground mb-8">
            Component Library
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Buttons */}
            <Card>
              <CardHeader>
                <CardTitle>Buttons</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex gap-2 flex-wrap">
                  <Button>Default</Button>
                  <Button variant="secondary">Secondary</Button>
                  <Button variant="outline">Outline</Button>
                  <Button variant="ghost">Ghost</Button>
                </div>
              </CardContent>
            </Card>

            {/* Form Elements */}
            <Card>
              <CardHeader>
                <CardTitle>Form Elements</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Card Component */}
            <Card>
              <CardHeader>
                <CardTitle>Featured Flowers</CardTitle>
                <CardDescription>
                  Beautiful arrangements for every occasion
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  All cards use the modern floral color scheme with soft backgrounds and elegant typography.
                </p>
              </CardContent>
            </Card>

            {/* Typography */}
            <Card>
              <CardHeader>
                <CardTitle>Typography</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <h3 className="text-lg font-semibold text-foreground">
                  Heading 3
                </h3>
                <p className="text-base text-foreground">
                  Regular text
                </p>
                <p className="text-sm text-muted-foreground">
                  Muted text for secondary information
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Ready to Build */}
        <section className="text-center">
          <Card className="max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle>Ready to Build Your Flower Shop</CardTitle>
              <CardDescription>
                Your Next.js project is now set up with shadcn/ui and a beautiful floral theme
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col gap-4 sm:flex-row justify-center">
              <Button size="lg">Start Building</Button>
              <Button variant="outline" size="lg">
                View Documentation
              </Button>
            </CardContent>
          </Card>
        </section>
      </main>
    </div>
  );
}
