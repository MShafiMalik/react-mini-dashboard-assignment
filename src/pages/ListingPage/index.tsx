import { useMemo } from 'react'
import { useAppDispatch, useAppSelector } from '@/app/hooks'
import { ErrorAlert } from '@/pages/ListingPage/components/ErrorAlert'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { ItemCard } from '@/pages/ListingPage/components/ItemCard'
import { ListingFilters } from '@/pages/ListingPage/components/ListingFilters'
import { ListingGridSkeleton } from '@/pages/ListingPage/components/ListingGridSkeleton'
import { NoProductsEmpty } from '@/pages/ListingPage/components/NoProductsEmpty'
import { useGetProductsQuery } from '@/features/listing/listingApi'
import {
  filterAndSortProducts,
  resetListingFilters,
  setSearchTerm,
  setSortBy,
} from '@/features/listing/listingSlice'

export function ListingPage() {
  const dispatch = useAppDispatch()
  const { searchTerm, sortBy } = useAppSelector((state) => state.listing)
  const { data: products = [], isLoading, isError, refetch } = useGetProductsQuery()

  const visibleProducts = useMemo(
    () => filterAndSortProducts(products, searchTerm, sortBy),
    [products, searchTerm, sortBy]
  )

  return (
    <div className="space-y-6">
      <Card className="border-border/80 bg-card/95 shadow-sm dark:bg-card/90">
        <CardHeader>
          <CardTitle>Product Listing</CardTitle>
          <CardDescription>
            Browse products, search by name, and sort by name or price.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <ListingFilters
            searchTerm={searchTerm}
            sortBy={sortBy}
            visibleCount={visibleProducts.length}
            totalCount={products.length}
            onSearchChange={(value) => dispatch(setSearchTerm(value))}
            onSortChange={(value) => dispatch(setSortBy(value))}
            onResetFilters={() => dispatch(resetListingFilters())}
          />

          {isLoading && <ListingGridSkeleton />}

          {isError && <ErrorAlert onRetry={() => void refetch()} />}

          {!isLoading && !isError && visibleProducts.length === 0 && (
            <NoProductsEmpty onClearFilters={() => dispatch(resetListingFilters())} />
          )}

          {!isLoading && !isError && visibleProducts.length > 0 && (
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {visibleProducts.map((product) => (
                <ItemCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
