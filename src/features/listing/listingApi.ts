import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export type TestProduct = {
  id: number
  title: string
  price: number
}

export const listingApi = createApi({
  reducerPath: 'listingApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://fakestoreapi.com/' }),
  endpoints: (builder) => ({
    getTestProducts: builder.query<TestProduct[], number>({
      query: (limit) => `products?limit=${String(limit)}`,
    }),
  }),
})

export const { useGetTestProductsQuery } = listingApi
