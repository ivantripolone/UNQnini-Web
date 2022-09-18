import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
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

  const [status, setStatus] = useState('')

  useEffect(() => {
    productsService
      .getProduct(productId!)
      .then((product) => {
        setProduct(product)
      })
      .catch((error) => {
        setStatus(error.response.status)
      })
  }, [])

  const errorScreen = (
    <div className='ErrorScreen'>
      <h1>Ha ocurrido un error. Disculpe las molestias.</h1>
      <h2>Código de error: {status}</h2>
    </div>
  )

  const productPageGrid = (
    <div className='ProductPageGrid'>
      <img src={product.pictureUrl} />
      <div className='container-flex'>
        <h1>{product.name}</h1>
        <h2>${product.price}</h2>
        <h3>Cantidad:</h3>
        <button
          id='BotonAgregarAlCarrito'
          type='button'
          className='btn btn-primary btn-lg'
        >
          {' '}
          Agregar al carrito{' '}
        </button>
        <ul>
          {' '}
          {product.description.map((desc) => (
            <li>{desc}</li>
          ))}{' '}
        </ul>
      </div>
    </div>
  )

  return <div>{status === '' ? productPageGrid : errorScreen}</div>
}

export default ProductPage
