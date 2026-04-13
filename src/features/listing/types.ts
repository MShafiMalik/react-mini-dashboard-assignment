export type ListingProduct = {
  id: number
  title: string
  price: number
  image: string
  category: string
  description: string
}

export const ListingSortBy = {
  NameAsc: 'name-asc',
  NameDesc: 'name-desc',
  PriceAsc: 'price-asc',
  PriceDesc: 'price-desc',
} as const

export type ListingSortBy = (typeof ListingSortBy)[keyof typeof ListingSortBy]
