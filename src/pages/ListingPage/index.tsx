import { useEffect, useMemo } from 'react'
import { useAppDispatch, useAppSelector } from '@/app/hooks'
import { ErrorAlert } from '@/pages/ListingPage/components/ErrorAlert'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { ItemCard } from '@/pages/ListingPage/components/ItemCard'
import { ListingFilters } from '@/pages/ListingPage/components/ListingFilters'
import { ListingGridSkeleton } from '@/pages/ListingPage/components/ListingGridSkeleton'
import { ListingPagination } from '@/pages/ListingPage/components/ListingPagination'
import { NoProductsEmpty } from '@/pages/ListingPage/components/NoProductsEmpty'
import { useGetProductsQuery } from '@/features/listing/listingApi'
import {
  LISTING_PAGE_SIZE,
  resetListingFilters,
  selectListingFilters,
  setPage,
} from '@/features/listing/listingFiltersSlice'
import { filterAndSortProducts } from '@/features/listing/listingSlice'

export function ListingPage() {
  const dispatch = useAppDispatch()
  const { searchTerm, sortBy, page } = useAppSelector(selectListingFilters)
  const { data: products = [], isLoading, isError, refetch } = useGetProductsQuery()

  const visibleProducts = useMemo(
    () => filterAndSortProducts(products, searchTerm, sortBy),
    [products, searchTerm, sortBy]
  )

  const totalPages = Math.max(1, Math.ceil(visibleProducts.length / LISTING_PAGE_SIZE))

  useEffect(() => {
    if (page > totalPages) {
      dispatch(setPage(totalPages))
    }
  }, [dispatch, page, totalPages])

  const paginatedProducts = useMemo(() => {
    const start = (page - 1) * LISTING_PAGE_SIZE
    return visibleProducts.slice(start, start + LISTING_PAGE_SIZE)
  }, [visibleProducts, page])

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
          <ListingFilters />

          {isLoading && <ListingGridSkeleton />}

          {isError && <ErrorAlert onRetry={() => void refetch()} />}

          {!isLoading && !isError && visibleProducts.length === 0 && (
            <NoProductsEmpty onClearFilters={() => dispatch(resetListingFilters())} />
          )}

          {!isLoading && !isError && visibleProducts.length > 0 && (
            <>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {paginatedProducts.map((product) => (
                  <ItemCard key={product.id} product={product} />
                ))}
              </div>
              <ListingPagination totalFiltered={visibleProducts.length} />
            </>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
