import { useNavigate } from 'react-router'
import { Product } from '../../types/product'

interface ProductCardProps {
  product: Product
}

const ProductCard = ({ product }: ProductCardProps) => {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate(`/products/${product.id}`)
  }

  return (
    <div className='card bg-transparent' data-style='width: 18rem;'>
      <img
        onClick={handleClick}
        src={product.pictureUrl}
        className='card-img-top'
        alt='...'
      />
      <div className='card-body'>
        <h5 className='card-title'>{product.name}</h5>
        <p className='card-text'>Precio: ${product.price}</p>
      </div>
    </div>
  )
}

export default ProductCard
