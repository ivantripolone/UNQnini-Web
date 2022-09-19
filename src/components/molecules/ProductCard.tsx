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
    <div className='CardContainer'>
      <img
        onClick={handleClick}
        src={product.pictureUrl}
        className='card-img-top'
        alt={`Producto ${product.name}`}
      />
      <div className='card-body'>
        <h5 className='card-title'>{product.name}</h5>
        <p className='card-text'>Precio: ${product.price}</p>
      </div>
    </div>
  )
}

export default ProductCard
