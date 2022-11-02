import { SetStateAction, useContext, useEffect, useState } from 'react'
import { FormControl, Table } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { DataContext } from '../../context/DataContext'
import { CartProduct, CartProductContextType, MessageErrorContextType } from '../../types/cartProduct'
import Pay_Button from '../../assets/Pay_Button.png'
import Aplicate_Button from '../../assets/Aplicate_Button.png'
import TableElement from '.././TableElement'
import ToastMessage from './ToastMessage'
import couponService from '../../services/couponService'

const Cart = () => {
  const { cartContext } = useContext(DataContext) as CartProductContextType
  const { getErrorMessagesForProducts, setErrorMessagesForProducts } = useContext(DataContext) as MessageErrorContextType
  const [getDiscount, setDiscount] = useState(0)
  const [getLocalCoupon, setLocalCoupon] = useState('')
  const [getShowFlag, setShowFlag] = useState('')
  const [getMessage, setMessage] = useState((getErrorMessagesForProducts === '') ? 'Bienvenido al carrito de compras, aqui vera todos sus productos seleccionados' : getErrorMessagesForProducts)
  const defaultToastMessage = <ToastMessage getMessage={getMessage} getShowFlag={getShowFlag} setShowFlag={setShowFlag} />
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

  const applyCoupon = () => {
    couponService.postCoupon({ codename: getLocalCoupon })
      .then((response: { data: SetStateAction<number> }) => { setShowFlag('show'); setMessage('Tu cupon se aplico correctamente.'); setDiscount(response.data) })
      .catch((error: { response: { data: { message: string } } }) => { setShowFlag('show'); setMessage('Error: El cupon no fue aplicado: ' + error.response.data.message) })
  }


  const totalToPay = (
    <div style={{ padding: '15px' }}>
      <h3>Total: ${total - (total * (getDiscount / 100))}</h3>
      <div className='CuponSection'>
        <FormControl
          style={{ width: '40%' }}
          type='text'
          placeholder='Ingrese su cupon de descuento'
          onChange={(event) => setLocalCoupon(event.target.value)}
        />
        <button onClick={() => { applyCoupon() }} id='BotonPagarProductos'> <img alt='' src={Aplicate_Button} /> </button>
      </div>



      <button onClick={() => { handleClick(); setErrorMessagesForProducts('') }} id='BotonPagarProductos'>
        <img alt='' src={Pay_Button} />
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

