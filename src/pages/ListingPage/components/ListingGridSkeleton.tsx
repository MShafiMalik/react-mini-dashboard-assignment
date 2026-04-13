import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Skeleton } from '@/components/ui/skeleton'

export function ListingGridSkeleton() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {Array.from({ length: 6 }).map((_, index) => (
        <Card key={index} className="h-full border-border/80 bg-card/95 shadow-sm dark:bg-card/90">
          <CardHeader className="gap-2">
            <div className="flex aspect-4/3 items-center justify-center overflow-hidden rounded-md bg-muted/40">
              <Skeleton className="h-full w-full rounded-sm" />
            </div>

            <CardTitle>
              <Skeleton className="h-5 w-full" />
            </CardTitle>

            <CardDescription>
              <Skeleton className="h-4 w-full" />
            </CardDescription>
          </CardHeader>

          <CardContent>
            <Skeleton className="h-7 w-1/3 min-w-24" />
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
