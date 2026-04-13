import { toast } from 'sonner'

import { useAppDispatch, useAppSelector } from '@/app/hooks'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { reset, increment, decrement } from '@/features/demo/demoSlice'
import { useGetTestProductsQuery } from '@/features/listing/listingApi'

export function ListingPage() {
  const dispatch = useAppDispatch()
  const counter = useAppSelector((state) => state.demo.counter)
  const { data: testProducts = [], isLoading, isError, refetch } = useGetTestProductsQuery(3)

  return (
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
          <CardTitle>Listing Blueprint</CardTitle>
          <CardDescription>
            Search, sort, loading/error states, and responsive card grid will be added in the next
            stages.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Button onClick={() => toast.success('Stage 8 routing and redux foundation is ready.')}>
            Confirm Listing Setup
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
