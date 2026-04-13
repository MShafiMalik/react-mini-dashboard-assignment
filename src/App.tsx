import { toast } from 'sonner'

import { ThemeToggle } from '@/components/theme-toggle'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Toaster } from '@/components/ui/sonner'

function App() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="space-y-6">
        <Card>
          <CardHeader>
            <div className="mb-4 flex items-center justify-between gap-3">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Blueprint Draft
                </p>
                <CardTitle className="text-2xl sm:text-3xl">Mini Dashboard UI Blueprint</CardTitle>
              </div>
              <ThemeToggle />
            </div>
            <CardDescription>
              Review and edit this plan before implementation. This screen is intentionally
              editable.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button
              variant="default"
              onClick={() =>
                toast.success(
                  'Blueprint loaded. We can now refine design decisions section by section.'
                )
              }
            >
              Confirm Blueprint View
            </Button>
          </CardContent>
        </Card>

        <div className="grid gap-6 lg:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Design System Tokens</CardTitle>
              <CardDescription>
                Use semantic colors and avoid hardcoded values in components.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2 text-sm">
              <p>
                <strong>primary:</strong> main CTA and active states
              </p>
              <p>
                <strong>secondary:</strong> supporting surfaces/actions
              </p>
              <p>
                <strong>accent:</strong> highlights and emphasis
              </p>
              <p>
                <strong>muted / muted-foreground:</strong> helper text and soft backgrounds
              </p>
              <p>
                <strong>destructive:</strong> validation and error states
              </p>
              <p>
                <strong>base tokens:</strong> background, foreground, border, ring
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>App Shell</CardTitle>
              <CardDescription>
                Simple dashboard-style shell for assignment clarity.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2 text-sm">
              <p>- Top bar with title, subtitle, and theme toggle</p>
              <p>- Tab navigation: Listing and Form</p>
              <p>- Consistent container width and spacing rhythm</p>
              <p>- Keep visual hierarchy clean and minimal</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Listing Page Blueprint</CardTitle>
              <CardDescription>Task 1 requirements mapped to UI sections.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2 text-sm">
              <p>- Header with page title and item count</p>
              <p>- Search bar (name/title filter)</p>
              <p>- Sort control (name and price options)</p>
              <p>- Loading, error, and empty states</p>
              <p>- Responsive grid: 1/2/3 columns by breakpoint</p>
              <p>- Item card: image, title, price/numeric value</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Form Page Blueprint</CardTitle>
              <CardDescription>Task 2 requirements mapped to validation UX.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2 text-sm">
              <p>- Single centered form card with clear labels</p>
              <p>- Fields: full name, email, phone, password</p>
              <p>- Inline errors per field (required + format/length rules)</p>
              <p>- Prevent invalid submit</p>
              <p>- Success message on valid submit</p>
              <p>- Optional reset action for quick retest</p>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Final Sign-Off Choices</CardTitle>
            <CardDescription>
              Update these preferences before implementation starts.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2 text-sm">
            <p>- Listing density: comfortable or compact</p>
            <p>- Theme style: neutral/professional or vibrant</p>
            <p>- Form width: narrow or medium</p>
            <p>- Include Reset button: yes or no</p>
          </CardContent>
        </Card>
      </div>
      <Toaster richColors />
    </main>
  )
}

export default App
