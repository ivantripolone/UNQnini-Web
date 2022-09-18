import { useEffect, useState } from 'react'
import productsService from '../../services/productsService'
import { Product } from '../../types/product'
import ProductGrid from '../molecules/ProductGrid'

const Catalog = () => {
  const [products, setProducts] = useState<Product[]>([])

  useEffect(() => {
    productsService.getProducts().then((data) => {
      setProducts(data)
    })
  }, [])

  return (
    <div>
      <ProductGrid products={products} />{' '}
    </div>
  )
}

export default Catalog
