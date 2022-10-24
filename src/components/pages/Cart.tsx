import { useContext, useEffect, useState } from 'react'
import { FormControl, Table } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { DataContext } from '../../context/DataContext'
import { CartProduct, CartProductContextType } from '../../types/cartProduct'
import Pay_Button from '../../assets/Pay_Button.png'
import Cancel_Button from '../../assets/Cancel_Button.png'
import Aplicate_Button from '../../assets/Aplicate_Button.png'
import TableElement from '.././TableElement'
import ToastMessage from './ToastMessage'
import couponService from '../../services/couponService'

const Cart = () => {  
  const { cartContext } = useContext(DataContext) as CartProductContextType
  const [getDiscount, setDiscount] = useState(0)
  const [getNameCoupon, setNameCoupon] = useState('')
  const [getShowFlag, setShowFlag] = useState('')
  const [couponApplied, setCouponApplied] = useState(false)
  const [getMessage, setMessage] = useState('Bienvenido al carrito de compras, aqui vera todos sus productos seleccionados')
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

  const applyCoupon  = () => {
    couponService.postCoupon({codename: getNameCoupon})
                  .then((response) => { setMessage('Tu cupon se aplico correctamente.'); setDiscount(response.data); setCouponApplied(true)})
                  .catch((error) => { setMessage('Error: El cupon no fue aplicado: ' + error.response.data.message)})
  }
  

  const totalToPay = (
    <div style={{ padding: '15px' }}>
      <h3>Total: ${total - (total * (getDiscount / 100))}</h3>
        <div className='CuponSection'>
            <FormControl
                  style={{ width: '40%' }}
                  disabled={couponApplied}
                  type='text'
                  placeholder='Ingrese su cupon de descuento'
                  onChange={(event) => setNameCoupon(event.target.value)}
            /> 
            { !couponApplied && <button onClick={() => {applyCoupon()}} id='BotonPagarProductos' > <img alt=''src={Aplicate_Button} /> </button>}
            { couponApplied && <button  onClick={() => {setDiscount(0); setCouponApplied(false)}} id='BotonPagarProductos' > <img alt=''src={Cancel_Button} /> </button>}
        </div>
      
      
      
      <button
        onClick={() => {handleClick();}}
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

