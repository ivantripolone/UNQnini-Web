import { useContext, useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { DataContext } from '../../context/DataContext'
import { CartProduct, CartProductContextType, MessageErrorContextType } from '../../types/cartProduct'
import Pay_Button from '../../assets/Pay_Button.png'
import TableElement from '.././TableElement'
import ToastMessage from './ToastMessage'

const Cart = () => {
  const { cartContext } = useContext(DataContext) as CartProductContextType
  const { getErrorMessagesForProducts , setErrorMessagesForProducts} = useContext(DataContext) as MessageErrorContextType

  const [getShowFlag, setShowFlag] = useState('')
  const [getMessage] = useState((getErrorMessagesForProducts === '') ? 'Bienvenido al carrito de compras, aqui vera todos sus productos seleccionados' : getErrorMessagesForProducts)
  const defaultToastMessage = <ToastMessage getMessage={getMessage} getShowFlag={getShowFlag} setShowFlag={setShowFlag}/>
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
        onClick={() => {handleClick(); setErrorMessagesForProducts('')}}
        id='BotonPagarProductos'
      >
        <img
          alt=''
          src={Pay_Button}
        />
      </button>
    </div>
  )

  useEffect(() => { setShowFlag('show') }, [getMessage])

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
      {defaultToastMessage}
    </div>
  )
}

export default Cart
