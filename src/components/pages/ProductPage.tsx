import { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { DataContext } from '../../context/DataContext'
import productsService from '../../services/productsService'
import { Product } from '../../types/product'
import { CartProduct, CartProductContextType } from '../../types/cartProduct'

const initialProduct = {
  id: '',
  name: '',
  pictureUrl: '',
  price: 0,
  description: [],
  stock: 0,
  category: '',
  year: '',
  license: '',
}

const ProductPage = () => {
  let { productId } = useParams<string>()
  const navigate = useNavigate()
  const [product, setProduct] = useState<Product>(initialProduct)
  const [quantitySelected, setQuantitySelected] = useState<number>(1)
  const { cartContext, setCartContext } = useContext(DataContext) as CartProductContextType

  const saveProductInCart = (id: string, title: string, quantity: Number, price: Number, stock: Number) => {
    const cartProduct = { id: id, title: title, quantity: quantity, price: price, stock: stock } as CartProduct
    setCartContext(cartContext.set(productId!, cartProduct))
  }

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
      <img
        src={product.pictureUrl}
        alt={product.name}
      />
      <div className='container-flex'>
        <h1>{product.name}</h1>
        <h2>${product.price}</h2>
        <h2>Seleccione una cantidad</h2>

        <select
          className='form-select mb-3'
          value={quantitySelected}
          onChange={(event) => setQuantitySelected(parseInt(event.target.value))}
          aria-label='Default select example'
        >
          {[...Array(product.stock)].map((_, i) => (
            <option
              key={i + 1}
              value={`${i + 1}`}
            >{`${i + 1}`}</option>
          ))}
        </select>

        <button
          onClick={() => saveProductInCart(productId!, product.name, quantitySelected, product.price, product.stock)}
          id='BotonAgregarAlCarrito'
          type='button'
          className='btn btn-primary btn-lg'
        >
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
