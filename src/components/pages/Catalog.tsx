import { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { ProductsContext } from '../../context/ProductsContext'
import productsService from '../../services/productsService'
import ProductGrid from '../molecules/ProductGrid'
import FilterSection from './FilterSection'

const Catalog = () => {
  const navigate = useNavigate()
  const { setProducts, setAllProducts } = useContext(ProductsContext)

  useEffect(() => {
    productsService
      .getProducts()
      .then((data) => {
        setProducts(data)
        setAllProducts(data)
      })
      .catch((error) => navigate(`/error/${error.response.status}`, { replace: true }))
  }, [navigate, setProducts, setAllProducts])

  return (
    <div>
      <FilterSection />
      <ProductGrid />
    </div>
  )
}

export default Catalog
