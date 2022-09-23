import { useContext } from 'react'
import { Table } from 'react-bootstrap'
import { DataContext } from '../../context/DataContext'
import { PurchaseData, PurchaseDataContextType } from '../../context/types'

type CartProduct = {
  id: string
  quantity: Number
  subtotal: Number
}

const Cart = () => {
  const cartContext = (useContext(DataContext) as PurchaseDataContextType).CartContext

  var products: CartProduct[] = []
  var total = 0
  //Obtener todos los productos del contexto y agregarlos a un Array
  //A su vez, sumar los subtotales
  cartContext.forEach((value: PurchaseData, key) => {
    products.push({
      id: key,
      quantity: value.quantitySelected,
      subtotal: value.totalToPay,
    })
    total += value.totalToPay as number
  })

  return (
    <div>
      <div className='ProductTableContainer'>
        <Table borderless>
          <thead>
            <tr>
              <th> Producto </th>
              <th> Cantidad </th>
              <th> Subtotal </th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => {
              return (
                <tr>
                  <th>{product.id}</th>
                  <th>{product.quantity.toString()}</th>
                  <th>$ {product.subtotal.toString()}.-</th>
                </tr>
              )
            })}
          </tbody>
        </Table>
      </div>
      <div className='CartFooter'>
        <h1>Total: ${total}</h1>
      </div>
    </div>
  )
}

export default Cart
