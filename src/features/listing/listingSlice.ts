import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

import { ListingSortBy, type ListingProduct } from '@/features/listing/types'

type ListingState = {
  searchTerm: string
  sortBy: ListingSortBy
}

const initialState: ListingState = {
  searchTerm: '',
  sortBy: ListingSortBy.NameAsc,
}

const listingSlice = createSlice({
  name: 'listing',
  initialState,
  reducers: {
    setSearchTerm: (state, action: PayloadAction<string>) => {
      state.searchTerm = action.payload
    },
    setSortBy: (state, action: PayloadAction<ListingSortBy>) => {
      state.sortBy = action.payload
    },
    resetListingFilters: (state) => {
      state.searchTerm = ''
      state.sortBy = ListingSortBy.NameAsc
    },
  },
})

export const { setSearchTerm, setSortBy, resetListingFilters } = listingSlice.actions

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

export default listingSlice.reducer
