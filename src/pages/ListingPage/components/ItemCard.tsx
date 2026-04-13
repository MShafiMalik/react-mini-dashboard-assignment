import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import type { ListingProduct } from '@/features/listing/types'

type ItemCardProps = {
  product: ListingProduct
}

export function ItemCard({ product }: ItemCardProps) {
  return (
    <Card className="h-full border-border/80 bg-card/95 shadow-sm dark:bg-card/90">
      <CardHeader className="gap-2">
        <div className="flex aspect-4/3 items-center justify-center overflow-hidden rounded-md bg-muted/40">
          <img
            src={product.image}
            alt={product.title}
            className="h-full w-full object-contain"
            loading="lazy"
          />
        </div>
        <CardTitle className="text-base">{product.title}</CardTitle>
        <CardDescription className="capitalize">{product.category}</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-lg font-semibold text-primary">${product.price.toFixed(2)}</p>
      </CardContent>
    </Card>
  )
}
