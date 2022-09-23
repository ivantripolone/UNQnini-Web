import { Product } from '../../types/product'
import Table from 'react-bootstrap/Table'

interface ProductTableProps {
  products: Product[]
}

const ProductTable = ({ products }: ProductTableProps) => {
  return (
    <div className='ProductTableContainer'>
      <Table borderless>
        <thead>
          <tr>
            <th> Producto </th>
            <th> Precio </th>
            <th> Cantidad </th>
          </tr>
        </thead>
        <tbody>
          {products.map((product: Product) => (
            <tr>
              <th> {product.name} </th>
              <th> {product.price} </th>
              <th> X</th>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  )
}

export default ProductTable
