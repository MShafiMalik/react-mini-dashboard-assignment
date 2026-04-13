import type { ListingSortBy } from '@/features/listing/types'
import { Button } from '@/components/ui/button'
import { SearchBar } from '@/pages/ListingPage/components/SearchBar'
import { SortSelect } from '@/pages/ListingPage/components/SortSelect'

type ListingFiltersProps = {
  searchTerm: string
  sortBy: ListingSortBy
  visibleCount: number
  totalCount: number
  onSearchChange: (value: string) => void
  onSortChange: (value: ListingSortBy) => void
  onResetFilters: () => void
}

export function ListingFilters({
  searchTerm,
  sortBy,
  visibleCount,
  totalCount,
  onSearchChange,
  onSortChange,
  onResetFilters,
}: ListingFiltersProps) {
  return (
    <div className="space-y-2">
      <div className="grid gap-3 sm:grid-cols-[1fr_auto_auto] sm:items-center">
        <SearchBar value={searchTerm} onSearchChange={onSearchChange} />
        <SortSelect value={sortBy} onSortChange={onSortChange} />
        <Button variant="outline" onClick={onResetFilters} className="whitespace-nowrap">
          Reset filters
        </Button>
      </div>

      <p className="text-xs text-muted-foreground">
        Showing {visibleCount} of {totalCount} products
      </p>
    </div>
  )
}
