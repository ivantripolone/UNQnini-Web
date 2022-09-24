import { useContext } from 'react'
import { Table } from 'react-bootstrap'
import { DataContext } from '../../context/DataContext'
import { CartProduct, CartProductContextType } from '../../context/types'
import Pay_Button from '../../img/Pay_Button.png'
import TableElement from '.././TableElement'

const Cart = () => {
  const { cartContext } = useContext(DataContext) as CartProductContextType

  const tableValues = () => {
    const products : CartProduct[]= []
    let total = 0
    
    cartContext.forEach((value: CartProduct) => { products.push(value); total += (value.quantity as number) * (value.price as number) })

    const tableElements = products.map((product : CartProduct) => { return ( <TableElement key={`TableElementKey_${product.id}`} {...product} />) })

    const totalToPay = (
      <tr>
       <h3>Total: ${total}</h3>
       <button id='BotonPagarProductos'><img alt='' src={Pay_Button}/></button>
     </tr>)

    return(tableElements.concat([totalToPay]))
  }

  return (
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
            {tableValues()}
          </tbody>
        </Table>
      </div>
  )
}

export default Cart
