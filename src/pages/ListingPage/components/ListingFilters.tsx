import { useMemo } from 'react'

import { useAppDispatch, useAppSelector } from '@/app/hooks'
import { Button } from '@/components/ui/button'
import { useGetProductsQuery } from '@/features/listing/listingApi'
import {
  resetListingFilters,
  selectListingFilters,
  setSearchTerm,
  setSortBy,
} from '@/features/listing/listingFiltersSlice'
import { filterAndSortProducts } from '@/features/listing/listingSlice'
import { SearchBar } from '@/pages/ListingPage/components/SearchBar'
import { SortSelect } from '@/pages/ListingPage/components/SortSelect'

export function ListingFilters() {
  const dispatch = useAppDispatch()
  const { searchTerm, sortBy } = useAppSelector(selectListingFilters)
  const { data: products = [] } = useGetProductsQuery()

  const visibleCount = useMemo(
    () => filterAndSortProducts(products, searchTerm, sortBy).length,
    [products, searchTerm, sortBy]
  )

  return (
    <div className="space-y-2">
      <div className="grid gap-3 sm:grid-cols-[minmax(0,1fr)_minmax(0,1fr)_auto] sm:items-center">
        <SearchBar value={searchTerm} onSearchChange={(value) => dispatch(setSearchTerm(value))} />
        <div className="w-full">
          <SortSelect value={sortBy} onSortChange={(value) => dispatch(setSortBy(value))} />
        </div>
        <Button
          variant="outline"
          size="default"
          onClick={() => dispatch(resetListingFilters())}
          className="h-8 w-full min-w-32 whitespace-nowrap px-4 sm:w-auto"
        >
          Reset filters
        </Button>
      </div>

      <p className="text-xs text-muted-foreground">
        Showing {visibleCount} of {products.length} products
      </p>
    </div>
  )
}
