import { configureStore } from '@reduxjs/toolkit'

import { listingApi } from '@/features/listing/listingApi'
import listingFiltersReducer from '@/features/listing/listingFiltersSlice'

export const store = configureStore({
  reducer: {
    listingFilters: listingFiltersReducer,
    [listingApi.reducerPath]: listingApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(listingApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
