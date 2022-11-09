import { useNavigate } from 'react-router'
import { Product } from '../../types/product'

interface ProductCardProps {
  product: Product
}

const ProductCard = ({ product }: ProductCardProps) => {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate(`/product/${product.id}`)
  }

  return (
    <div className='CardContainer' onClick={handleClick}>
      <img
        src={product.pictureUrl}
        className='card-img-top'
        alt={`Producto ${product.name}`}
      />
      <div className='card-body'>
        <h5 className='card-title'>{product.name}</h5>
        <b className='card-text'>Precio: ${product.price}</b>
      </div>
    </div>
  )
}

export default ProductCard
