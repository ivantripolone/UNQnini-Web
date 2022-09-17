import { Product } from '../../types/product'

interface ProductCardProps {
  product: Product
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <div className='card'>
      <img src={product.pictureUrl} className='card-img-top' alt='...' />
      <div className='card-body'>
        <h5 className='card-title'>{product.name}</h5>
        <ul className='list-group list-group-flush'>
          <li className='list-group-item'>{'Precio: $' + product.price}</li>
          <li className='list-group-item'>
            {'Descripcion: ' + product.description}
          </li>
          <li className='list-group-item'>{'En Stock: ' + product.stock}</li>
        </ul>
        <button type='button' className='btn btn-primary'>
          Agregar al carrito
        </button>
      </div>
    </div>
  )
}

export default ProductCard
