import { toast } from 'sonner'

import { ThemeToggle } from '@/components/theme-toggle'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Toaster } from '@/components/ui/sonner'

function App() {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-5xl items-center justify-center px-4 py-10">
      <Card className="w-full max-w-2xl">
        <CardHeader className="text-center">
          <div className="mb-4 flex justify-end">
            <ThemeToggle />
          </div>
          <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Stage 7 Complete
          </p>
          <CardTitle className="text-3xl sm:text-4xl">
            light and dark theme support is ready
          </CardTitle>
          <CardDescription className="text-sm sm:text-base">
            Light, dark, and system themes are now supported with persisted user preference.
          </CardDescription>
        </CardHeader>
        <CardContent className="flex justify-center">
          <Button
            onClick={() => toast.success('Theme setup verified. Your preference is persisted.')}
          >
            Show Success Toast
          </Button>
        </CardContent>
      </Card>
      <Toaster richColors />
    </main>
  )
}

export default App
