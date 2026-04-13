import { ListingSortBy, type ListingProduct } from '@/features/listing/types'

export function filterAndSortProducts(
  products: ListingProduct[],
  searchTerm: string,
  sortBy: ListingSortBy
) {
  const filtered = products.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase().trim())
  )

  return [...filtered].sort((a, b) => {
    switch (sortBy) {
      case ListingSortBy.NameAsc:
        return a.title.localeCompare(b.title)
      case ListingSortBy.NameDesc:
        return b.title.localeCompare(a.title)
      case ListingSortBy.PriceAsc:
        return a.price - b.price
      case ListingSortBy.PriceDesc:
        return b.price - a.price
      default:
        return 0
    }
  })
}
