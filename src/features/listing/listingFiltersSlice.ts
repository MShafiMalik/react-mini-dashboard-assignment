import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

import type { RootState } from '@/app/store'
import { ListingSortBy } from '@/features/listing/types'

/** Items per page in the product grid */
export const LISTING_PAGE_SIZE = 9

type ListingFiltersState = {
  searchTerm: string
  sortBy: ListingSortBy
  page: number
}

const initialState: ListingFiltersState = {
  searchTerm: '',
  sortBy: ListingSortBy.NameAsc,
  page: 1,
}

const listingFiltersSlice = createSlice({
  name: 'listingFilters',
  initialState,
  reducers: {
    setSearchTerm: (state, action: PayloadAction<string>) => {
      state.searchTerm = action.payload
      state.page = 1
    },
    setSortBy: (state, action: PayloadAction<ListingSortBy>) => {
      state.sortBy = action.payload
      state.page = 1
    },
    setPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload
    },
    resetListingFilters: (state) => {
      state.searchTerm = ''
      state.sortBy = ListingSortBy.NameAsc
      state.page = 1
    },
  },
})

export const { setSearchTerm, setSortBy, setPage, resetListingFilters } =
  listingFiltersSlice.actions

export const selectListingFilters = (state: RootState) => state.listingFilters

export default listingFiltersSlice.reducer
