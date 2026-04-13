import { ChevronLeft, ChevronRight } from 'lucide-react'

import { useAppDispatch, useAppSelector } from '@/app/hooks'
import { Button } from '@/components/ui/button'
import {
  LISTING_PAGE_SIZE,
  selectListingFilters,
  setPage,
} from '@/features/listing/listingFiltersSlice'

type ListingPaginationProps = {
  totalFiltered: number
}

export function ListingPagination({ totalFiltered }: ListingPaginationProps) {
  const dispatch = useAppDispatch()
  const { page } = useAppSelector(selectListingFilters)
  const totalPages = Math.max(1, Math.ceil(totalFiltered / LISTING_PAGE_SIZE))
  const start = (page - 1) * LISTING_PAGE_SIZE + 1
  const end = Math.min(page * LISTING_PAGE_SIZE, totalFiltered)

  if (totalFiltered === 0) {
    return null
  }

  return (
    <div className="flex flex-col items-center justify-between gap-3 border-t border-border/60 pt-4 sm:flex-row">
      <p className="text-xs text-muted-foreground sm:text-sm">
        Showing <span className="font-medium text-foreground">{start}</span>–
        <span className="font-medium text-foreground">{end}</span> of{' '}
        <span className="font-medium text-foreground">{totalFiltered}</span> products
      </p>
      <div className="flex items-center gap-2">
        <Button
          type="button"
          variant="outline"
          size="sm"
          className="min-w-24"
          disabled={page <= 1}
          onClick={() => dispatch(setPage(page - 1))}
        >
          <ChevronLeft className="size-4" />
          Previous
        </Button>
        <span className="min-w-22 text-center text-xs text-muted-foreground tabular-nums sm:text-sm">
          Page {page} of {totalPages}
        </span>
        <Button
          type="button"
          variant="outline"
          size="sm"
          className="min-w-24"
          disabled={page >= totalPages}
          onClick={() => dispatch(setPage(page + 1))}
        >
          Next
          <ChevronRight className="size-4" />
        </Button>
      </div>
    </div>
  )
}
