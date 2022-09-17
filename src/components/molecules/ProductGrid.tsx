import { Product } from '../../types/product'
import ProductCard from './ProductCard'

interface ProductGridProps {
  products: Product[]
}

const ProductGrid = ({ products }: ProductGridProps) => {
  return (
    <div className='container-fluid'>
      <div className='row row-cols-4'>
        {products.map((product: Product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}

export default ProductGrid
