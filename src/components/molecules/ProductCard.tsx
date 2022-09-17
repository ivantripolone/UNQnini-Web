import { Product } from '../../types/product'

interface ProductCardProps {
  product: Product
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <div className="card" data-style="width: 18rem;">
      <a href={"http://localhost:3000/product/"+product.id}>
        <img src={product.pictureUrl} className="card-img-top" alt="..."/>
      </a>
      <div className="card-body">
        <h5 className="card-title">{product.name}</h5>
        <p className="card-text">Precio: ${product.price}</p>
      </div>
    </div>
  )
}

export default ProductCard
