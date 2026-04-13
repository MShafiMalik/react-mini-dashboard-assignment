import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export function FormPage() {
  return (
    <Card className="border-border/80 bg-card/95 shadow-sm dark:bg-card/90">
      <CardHeader>
        <CardTitle>Form Page Scaffold</CardTitle>
        <CardDescription>
          Form layout and validation flow will be implemented in Stage 11.
        </CardDescription>
      </CardHeader>
      <CardContent className="text-sm text-muted-foreground">
        Required fields: Full Name, Email, Phone Number, Password.
      </CardContent>
    </Card>
  )
}
