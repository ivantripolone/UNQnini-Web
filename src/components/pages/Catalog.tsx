import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import productsService from '../../services/productsService'
import { Product } from '../../types/product'
import ProductGrid from '../molecules/ProductGrid'

const Catalog = () => {
  const [products, setProducts] = useState<Product[]>([])
  const navigate = useNavigate()

  const handleError = (status: string) => {
    navigate(`/error/${status}`, { replace: true })
  }

  useEffect(() => {
    productsService
      .getProducts()
      .then((data) => {
        setProducts(data)
      })
      .catch((error) => handleError(error.response.status))
  }, [])

  return (
    <div>
      <ProductGrid products={products} />
    </div>
  )
}

export default Catalog
