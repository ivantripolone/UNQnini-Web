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

  useEffect(() => {
    productsService
      .getProduct(productId!)
      .then((product) => {
        setProduct(product)
      })
      .catch((error) => navigate(`/error/${error.response.status}`, { replace: true }))
  }, [navigate, productId])

  return (
    <div className='ProductPageGrid'>
      <img src={product.pictureUrl} alt={product.name} />
      <div className='container-flex'>
        <h1>{product.name}</h1>
        <h2>${product.price}</h2>
        <h2>Seleccione una cantidad</h2>

        <select className='form-select mb-3' aria-label='Default select example'>
          {[...Array(product.stock)].map((_, i) => (
            <option key={i + 1}>{`${i + 1}`}</option>
          ))}
        </select>

        <button id='BotonAgregarAlCarrito' type='button' className='btn btn-primary btn-lg'>
          Agregar al carrito
        </button>
        <ul>
          {product.description.map((desc) => (
            <li key={desc}>{desc}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default ProductPage
