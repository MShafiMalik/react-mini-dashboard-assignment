import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import type { ListingProduct } from '@/features/listing/types'

const rawListingApiBaseUrl = import.meta.env.VITE_LISTING_API_BASE_URL as unknown

const LISTING_API_BASE_URL =
  typeof rawListingApiBaseUrl === 'string' && rawListingApiBaseUrl.length > 0
    ? rawListingApiBaseUrl
    : 'https://fakestoreapi.com/'

export const listingApi = createApi({
  reducerPath: 'listingApi',
  baseQuery: fetchBaseQuery({ baseUrl: LISTING_API_BASE_URL }),
  endpoints: (builder) => ({
    getProducts: builder.query<ListingProduct[], number | void>({
      query: (limit) => {
        const resolvedLimit = limit ?? 12
        return `products?limit=${String(resolvedLimit)}`
      },
    }),
  }),
})

export const { useGetProductsQuery } = listingApi
