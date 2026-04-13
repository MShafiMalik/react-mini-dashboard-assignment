import { RefreshCw } from 'lucide-react'

import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { Button } from '@/components/ui/button'

type ErrorAlertProps = {
  onRetry: () => void
}

export function ErrorAlert({ onRetry }: ErrorAlertProps) {
  return (
    <Alert variant="destructive" className="border-destructive/30 bg-destructive/5 p-4 text-center">
      <AlertTitle className="text-center">Unable to load products right now</AlertTitle>
      <AlertDescription className="space-y-3 text-center">
        <p>Something went wrong while fetching data from the API.</p>
        <div className="flex flex-col items-center justify-center gap-2">
          <Button
            variant="outline"
            size="sm"
            className="border-destructive/40 hover:bg-destructive/10"
            onClick={onRetry}
          >
            <RefreshCw className="mr-1 size-3.5" />
            Retry request
          </Button>
          <p className="text-xs text-muted-foreground">Check your connection and try again.</p>
        </div>
      </AlertDescription>
    </Alert>
  )
}
