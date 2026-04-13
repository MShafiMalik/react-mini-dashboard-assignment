import { ListingSortBy } from '@/features/listing/types'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

type SortSelectProps = {
  value: ListingSortBy
  onSortChange: (value: ListingSortBy) => void
}

const sortLabelMap: Record<ListingSortBy, string> = {
  [ListingSortBy.NameAsc]: 'Name (A-Z)',
  [ListingSortBy.NameDesc]: 'Name (Z-A)',
  [ListingSortBy.PriceAsc]: 'Price (Low-High)',
  [ListingSortBy.PriceDesc]: 'Price (High-Low)',
}

export function SortSelect({ value, onSortChange }: SortSelectProps) {
  return (
    <Select value={value} onValueChange={(nextValue) => onSortChange(nextValue as ListingSortBy)}>
      <SelectTrigger className="w-full sm:min-w-44" aria-label="Sort products">
        <SelectValue>{sortLabelMap[value]}</SelectValue>
      </SelectTrigger>
      <SelectContent align="end">
        <SelectItem value={ListingSortBy.NameAsc}>{sortLabelMap[ListingSortBy.NameAsc]}</SelectItem>
        <SelectItem value={ListingSortBy.NameDesc}>
          {sortLabelMap[ListingSortBy.NameDesc]}
        </SelectItem>
        <SelectItem value={ListingSortBy.PriceAsc}>
          {sortLabelMap[ListingSortBy.PriceAsc]}
        </SelectItem>
        <SelectItem value={ListingSortBy.PriceDesc}>
          {sortLabelMap[ListingSortBy.PriceDesc]}
        </SelectItem>
      </SelectContent>
    </Select>
  )
}
