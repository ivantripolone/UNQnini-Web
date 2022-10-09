import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import productsService from '../../services/productsService'
import { Product } from '../../types/product'
import ProductGrid from '../molecules/ProductGrid'

const Catalog = () => {
  const [products, setProducts] = useState<Product[]>([])
  const navigate = useNavigate()

  useEffect(() => {
    productsService
      .getProducts()
      .then((data) => {
        setProducts(data)
      })
      .catch((error) => navigate(`/error/${error.response.status}`, { replace: true }))
  }, [navigate])

  return (
    <div>
      <ProductGrid products={products} />
    </div>
  )
}

export default Catalog
