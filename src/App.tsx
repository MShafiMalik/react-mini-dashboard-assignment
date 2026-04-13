import { toast } from 'sonner'

import { useAppDispatch, useAppSelector } from '@/app/hooks'
import { ThemeToggle } from '@/components/theme-toggle'
import { reset, increment, decrement } from '@/features/demo/demoSlice'
import { useGetTestProductsQuery } from '@/features/listing/listingApi'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Toaster } from '@/components/ui/sonner'

function App() {
  const dispatch = useAppDispatch()
  const counter = useAppSelector((state) => state.demo.counter)
  const { data: testProducts = [], isLoading, isError, refetch } = useGetTestProductsQuery(3)

  return (
    <main className="mx-auto min-h-screen w-full max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="space-y-6">
        <Card className="border-border/80 bg-card/95 shadow-sm dark:bg-card/90">
          <CardHeader>
            <CardTitle>Redux Toolkit + RTK Query Test</CardTitle>
            <CardDescription>
              Temporary panel to validate store state updates and API fetching.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center gap-2">
              <p className="text-sm text-muted-foreground">Counter:</p>
              <p className="font-semibold">{counter}</p>
            </div>
            <div className="flex flex-wrap gap-2">
              <Button variant="secondary" onClick={() => dispatch(decrement())}>
                Decrement
              </Button>
              <Button variant="default" onClick={() => dispatch(increment())}>
                Increment
              </Button>
              <Button variant="outline" onClick={() => dispatch(reset())}>
                Reset
              </Button>
            </div>

            <div className="space-y-2 text-sm">
              <p className="font-medium">RTK Query Test Products</p>
              {isLoading && <p className="text-muted-foreground">Loading products...</p>}
              {isError && (
                <div className="flex items-center gap-2">
                  <p className="text-destructive">Failed to fetch products.</p>
                  <Button variant="outline" size="sm" onClick={() => void refetch()}>
                    Retry
                  </Button>
                </div>
              )}
              {!isLoading && !isError && (
                <ul className="space-y-1 text-muted-foreground">
                  {testProducts.map((product) => (
                    <li key={product.id}>
                      {product.title} - ${product.price}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </CardContent>
        </Card>

        <Card className="border-border/80 bg-card/95 shadow-sm dark:bg-card/90">
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
              className="bg-primary px-5 text-primary-foreground hover:bg-primary/90"
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
          <Card className="border-border/80 bg-card/95 shadow-sm dark:bg-card/90">
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

          <Card className="border-border/80 bg-card/95 shadow-sm dark:bg-card/90">
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
          <Card className="border-border/80 bg-card/95 shadow-sm dark:bg-card/90">
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

          <Card className="border-border/80 bg-card/95 shadow-sm dark:bg-card/90">
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

        <Card className="border-border/80 bg-card/95 shadow-sm dark:bg-card/90">
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
