import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import productsService from '../../services/productsService'
import { Product } from '../../types/product'

const ProductPage = () => {
  let { productId } = useParams<string>()
  const [product, setProduct] = useState<Product>({
    id: '',
    name: '',
    pictureUrl: '',
    price: 0,
    description: [],
    stock: 0,
  })

  const navigate = useNavigate()

  const handleError = (status: string) => {
    navigate(`/error/${status}`, { replace: true })
  }

  useEffect(() => {
    productsService
      .getProduct(productId!)
      .then((product) => {
        setProduct(product)
      })
      .catch((error) => handleError(error.response.status))
  }, [])

  return (
    <div className='ProductPageGrid'>
      <img src={product.pictureUrl} />
      <div className='container-flex'>
        <h1>{product.name}</h1>
        <h2>${product.price}</h2>
        <h3>Cantidad:</h3>
        <button id='BotonAgregarAlCarrito' type='button' className='btn btn-primary btn-lg'>
          Agregar al carrito
        </button>
        <ul>
          {product.description.map((desc) => (
            <li>{desc}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default ProductPage
