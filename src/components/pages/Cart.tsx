import { useContext } from 'react'
import { Table } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { DataContext } from '../../context/DataContext'
import { CartProduct, CartProductContextType } from '../../context/types'
import Pay_Button from '../../img/Pay_Button.png'
import TableElement from '.././TableElement'

const Cart = () => {
  const { cartContext } = useContext(DataContext) as CartProductContextType

  const navigate = useNavigate()

  const products: CartProduct[] = []
  let total = 0

  cartContext.forEach((value: CartProduct) => {
    products.push(value)
    total += (value.quantity as number) * (value.price as number)
  })

  const tableElements = products.map((product: CartProduct) => {
    return (
      <TableElement
        key={`TableElementKey_${product.id}`}
        {...product}
      />
    )
  })

  const handleClick = () => {
    navigate('/purchase')
  }

  const totalToPay = (
    <div style={{ padding: '15px' }}>
      <h3>Total: ${total}</h3>
      <button
        onClick={handleClick}
        id='BotonPagarProductos'
      >
        <img
          alt=''
          src={Pay_Button}
        />
      </button>
    </div>
  )

  return (
    <div className='d-flex flex-column ProductTableContainer'>
      <Table borderless>
        <thead>
          <tr>
            <th> Producto </th>
            <th> Cantidad </th>
            <th> Subtotal </th>
          </tr>
        </thead>
        <tbody>{tableElements}</tbody>
      </Table>
      {totalToPay}
    </div>
  )
}

export default Cart
