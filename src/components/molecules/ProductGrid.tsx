import { useContext } from 'react'
import { ProductsContext } from '../../context/ProductsContext'
import { Product } from '../../types/product'
import ProductCard from './ProductCard'

const ProductGrid = () => {
  const { products } = useContext(ProductsContext)

  return (
    <div className='ProductGridContainer'>
      {products.map((product: Product) => (
        <ProductCard
          key={product.id}
          product={product}
        />
      ))}
    </div>
  )
}

export default ProductGrid
