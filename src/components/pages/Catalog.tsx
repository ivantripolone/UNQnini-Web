import { useEffect, useState } from 'react'
import productsService from '../../services/productsService'
import { Product } from '../../types/product'
import ProductGrid from '../molecules/ProductGrid'

function Catalog() {
  const [products, setProducts] = useState<Product[]>([])

  useEffect(() => {
    productsService.getProducts().then((data) => {
      setProducts(data)
    })
  }, [])

  return (
    <div className='Catalog'>
      <div className='catalog-header'>
        <h1>Productos</h1>
      </div>
      <div className='catalog-body'>
        <ProductGrid products={products} />
      </div>
    </div>
  )
}

export default Catalog
