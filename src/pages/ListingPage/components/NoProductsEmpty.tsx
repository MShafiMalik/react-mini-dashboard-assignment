import { PackageSearch } from 'lucide-react'

import { Button } from '@/components/ui/button'
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from '@/components/ui/empty'

type NoProductsEmptyProps = {
  onClearFilters?: () => void
}

export function NoProductsEmpty({ onClearFilters }: NoProductsEmptyProps) {
  return (
    <Empty className="rounded-lg border border-border/80 border-solid bg-card/50 py-12 shadow-sm dark:bg-card/30">
      <EmptyHeader className="max-w-md gap-3">
        <EmptyMedia
          variant="icon"
          className="mb-0 size-16 rounded-xl border border-border/60 bg-muted/50 [&_svg]:size-8"
        >
          <PackageSearch className="text-muted-foreground size-8" />
        </EmptyMedia>
        <EmptyTitle className="text-lg font-semibold tracking-tight text-foreground">
          No products found
        </EmptyTitle>
        <EmptyDescription className="max-w-sm text-pretty text-sm leading-relaxed">
          No items match your current filters. Clear filters to show all products, or refine your
          search and sort options.
        </EmptyDescription>
      </EmptyHeader>

      {onClearFilters ? (
        <EmptyContent className="mt-2 max-w-md gap-3">
          <Button type="button" onClick={onClearFilters}>
            Clear filters
          </Button>
          <p className="text-xs text-muted-foreground">
            Resets search and sort to the default view.
          </p>
        </EmptyContent>
      ) : null}
    </Empty>
  )
}
