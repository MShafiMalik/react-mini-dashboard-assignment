import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import type { ListingProduct } from '@/features/listing/types'

const rawApiBaseUrl = import.meta.env.VITE_API_BASE_URL as unknown

const API_BASE_URL =
  typeof rawApiBaseUrl === 'string' && rawApiBaseUrl.length > 0
    ? rawApiBaseUrl
    : 'https://fakestoreapi.com/'

export const listingApi = createApi({
  reducerPath: 'listingApi',
  baseQuery: fetchBaseQuery({ baseUrl: API_BASE_URL }),
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
