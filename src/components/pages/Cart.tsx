import { useContext } from 'react'
import { Table } from 'react-bootstrap'
import { DataContext } from '../../context/DataContext'
import { CartProduct, CartProductContextType } from '../../context/types'
import Delete_Button from '../../img/Delete_Button.png'
import Pay_Button from '../../img/Pay_Button.png'

const Cart = () => {
  const { cartContext , setCartContext } = useContext(DataContext) as CartProductContextType
  
  const handleDelete = (productId : string) => {
    cartContext.delete(productId)
    setCartContext(new Map(cartContext))
  } 

  const tableValues = () => {
    const products = new Array()
    let total = 0
    
    cartContext.forEach((value: CartProduct) => { products.push(value); total += value.subtotal as number})

    const tableElements = products.map((product) => {
      return (
        <tr id={product.id}>
          <th>{product.title}</th>
          <th>{product.quantity.toString()}</th>
          <th>${product.subtotal.toString()}</th>
          <th><button onClick={() => handleDelete(product.id)} id='BotonEliminarProducto'><img src={Delete_Button}/></button></th>
        </tr>
      )
    })

    const totalToPay = (
      <tr>
       <h3>Total: ${total}</h3>
       <button id='BotonPagarProductos'><img src={Pay_Button}/></button>
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
