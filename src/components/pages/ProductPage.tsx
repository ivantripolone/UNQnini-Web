import { useEffect, useState } from 'react'
import Button from 'react-bootstrap/esm/Button'
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

  useEffect(() => {
    productsService.getProduct(productId!).then((product) => {
      setProduct(product)
    })
  }, [])

  return (
    <div>
      <div className='product-picture'>
        <img src={product.pictureUrl} />
      </div>
      <div>
        <h1>{product.name}</h1>
        <h2>{product.price}</h2>
      </div>
      <div>
        <h3>Cantidad:</h3>
        <Button variant='success'>Agregar al carrito</Button>
      </div>
      <div>
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
