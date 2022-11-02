import { useContext, useEffect, useState } from 'react'
import { FormCheck, FormControl, InputGroup } from 'react-bootstrap'
import PurchaseSection from './PurchaseSection'
import orderService from '../../services/orderService'
import { OrderCash, Order, OrderCard, OrderCreditCard } from '../../types/order'
import { DataContext } from '../../context/DataContext'
import { CartProductContextType } from '../../types/cartProduct'
import ToastMessage from '../molecules/ToastMessage'
import { ProductsContextType } from '../../context/ProductsContext'
import { traducir } from '../extas/Traductor'

const Purchase = () => {
  const { cartContext, setCartContext } = useContext(DataContext) as CartProductContextType
  const { discount } = useContext(DataContext) as ProductsContextType
  const [getBuyerName, setBuyerName] = useState('')
  const [getBusinessName, setBusinessName] = useState('')
  const [getCuit, setCuit] = useState('')
  const [getBusinessAddress, setBusinessAddress] = useState('')
  const [isByHomeDelivery, setIsByHomeDelivery] = useState(false)
  const [getDeliveryAddress, setDeliveryAddress] = useState('')
  const [getPaymentType, setPaymentType] = useState('Efectivo')
  const [getPaysExactAmount, setPaysExactAmount] = useState(true)
  const [getAmountToPayInCash, setAmountToPayInCash] = useState(0)
  const [getPayerName, setPayerName] = useState('')
  const [getCardNumber, setCardNumber] = useState('')
  const [getCardSecurityCode, setCardSecurityCode] = useState('')
  const [getAmountOfPayments, setAmountOfPayments] = useState('1')
  const [getCardExpirationMounth, setCardExpirationMounth] = useState('')
  const [getCardExpirationYear, setCardExpirationYear] = useState('')
  const [getShowFlag, setShowFlag] = useState('')
  const [getMessage, setMessage] = useState('Bienvenido a la sección de pago, ingrese todos los datos solicitados.')
  const defaultToastMessage = <ToastMessage getMessage={getMessage} getShowFlag={getShowFlag} setShowFlag={setShowFlag} />

  const concludePurchase = () => {

    const order: Order = {
      buyerName: getBuyerName,
      businessName: getBusinessName,
      cuit: getCuit,
      businessAddress: getBusinessAddress,
      isByHomeDelivery: isByHomeDelivery,
      deliveryAddress: getDeliveryAddress,
      products: Object.assign({}, ...Array.from(cartContext.entries()).map(([k, v]) => ({ [k]: v.quantity }))),
      coupon: discount
    }

    if (getPaymentType === 'Efectivo') {
      const orderCash = {
        paysExactAmount: getPaysExactAmount,
        payAmount: getAmountToPayInCash
      }

      orderService.postOrderCash(Object.assign({}, order, orderCash) as OrderCash)
        .then(() => { setShowFlag('show'); setMessage('Tu pedido fue realizado correctamente.'); setCartContext(new Map()) })
        .catch((response: { response: { data: { errors: { field: string, defaultMessage: string }[] } } }) => { setMessage('Tu pedido no pudo ser concretado, hubo un problema: El campo ' + traducir(response.response.data.errors[0].field) + ' ' + response.response.data.errors[0].defaultMessage) })
    } else {
      const orderCard = {
        payerName: getPayerName,
        cardNumber: getCardNumber,
        cardExpirationDate: getCardExpirationMounth + '/' + getCardExpirationYear,
        cardSecurityCode: getCardSecurityCode
      }

      if (getPaymentType === 'Tarjeta de Crédito') {
        orderService.postOrderCreditCard(Object.assign({}, order, orderCard, { amountOfPayments: getAmountOfPayments }) as OrderCreditCard)
          .then(() => { setShowFlag('show'); setMessage('Tu pedido fue realizado correctamente.'); setCartContext(new Map()) })
          .catch((response: { response: { data: { errors: { field: string, defaultMessage: string }[] } } }) => { setMessage('Tu pedido no pudo ser concretado, hubo un problema: El campo ' + traducir(response.response.data.errors[0].field) + ' ' + response.response.data.errors[0].defaultMessage) })
      } else {
        orderService.postOrderDebitCard(Object.assign({}, order, orderCard) as OrderCard)
          .then(() => { setShowFlag('show'); setMessage('Tu pedido fue realizado correctamente.'); setCartContext(new Map()) })
          .catch((response: { response: { data: { errors: { field: string, defaultMessage: string }[] } } }) => { setMessage('Tu pedido no pudo ser concretado, hubo un problema: El campo ' + traducir(response.response.data.errors[0].field) + ' ' + response.response.data.errors[0].defaultMessage) })
      }
    }
    console.log(getBusinessName)
  }

  useEffect(() => { setShowFlag('show') }, [getMessage])


  return (
    <div className='PurchasePage'>
      <div className='my-4 d-flex flex-column gap-3'>
        <PurchaseSection title={'DATOS'}>

          <div className='d-flex flex-column gap-3'>

            <FormControl style={{ width: '40%' }} type='text'
              placeholder='Nombre y Apellido'
              onChange={(event) => setBuyerName(event.target.value)}
            />
            <FormControl style={{ width: '40%' }} type='text'
              placeholder='Nombre del comercio'
              onChange={(event) => setBusinessName(event.target.value)}
            />
            <FormControl style={{ width: '40%' }} type='number'
              placeholder='CUIT del comercio'
              onChange={(event) => setCuit(event.target.value)}
            />
            <FormControl style={{ width: '40%' }} type='text'
              placeholder='Dirección del comercio'
              onChange={(event) => setBusinessAddress(event.target.value)}
            />
          </div>
        </PurchaseSection>
        <PurchaseSection title={'ENVIO'}>
          <div>
            <FormCheck type='radio' id='inline-radio' name='group1'
              label='Retirar producto'
              checked={!isByHomeDelivery}
              onChange={() => setIsByHomeDelivery(false)}
            />
            <FormCheck type='radio' id='inline-radio' name='group1'
              label='Enviar producto'
              onChange={() => setIsByHomeDelivery(true)}
            />
            {isByHomeDelivery
              ?
              <FormControl style={{ width: '40%' }} type='text'
                placeholder='Dirección de envío'
                onChange={(event) => setDeliveryAddress(event.target.value)} />
              : null
            }
          </div>
        </PurchaseSection>
        <PurchaseSection title={'PAGO'}>
          <FormCheck type='radio' id='inline-radio' name='group2'
            label='Pago en efectivo'
            checked={getPaymentType == 'Efectivo'}
            onChange={() => setPaymentType('Efectivo')}
          />
          <FormCheck type='radio' id='inline-radio' name='group2'
            label='Pago con tarjeta de débito'
            onChange={() => setPaymentType('Tarjeta de Débito')}
          />
          <FormCheck type='radio' id='inline-radio' name='group2'
            label='Pago con tarjeta de crédito'
            onChange={() => setPaymentType('Tarjeta de Crédito')}
          />
          {getPaymentType === 'Efectivo' ? (
            <div>
              <p>Abona cantidad exacta:</p>
              <FormCheck type='radio' id='inline-radio' name='group3'
                label='Sí'
                checked={getPaysExactAmount}
                onChange={() => setPaysExactAmount(true)}
              />
              <FormCheck type='radio' id='inline-radio' name='group3'
                label='No'
                onChange={() => setPaysExactAmount(false)}
              />
              {getPaysExactAmount ? null : (
                <FormControl style={{ width: '40%' }}
                  type='number'
                  placeholder='Cantidad para abono'
                  onChange={(event) => setAmountToPayInCash((event.target.value) as unknown as number)}
                />
              )}
            </div>
          ) : null}
          {getPaymentType === 'Tarjeta de Débito' ? (
            <div>
              <FormControl style={{ width: '40%' }} type='text'
                placeholder='Nombre y Apellido (como figuran en la tarjeta)'
                onChange={(event) => setPayerName(event.target.value)}
              />
              <FormControl style={{ width: '40%' }} type='number'
                placeholder='Número de tarjeta'
                onChange={(event) => setCardNumber(event.target.value)}
              />
              <p>Fecha de caducidad:</p>
              <InputGroup style={{ width: '20%' }}>
                <FormControl
                  type='number'
                  placeholder='Mes'
                  onChange={(event) => setCardExpirationMounth(event.target.value)}
                />
                <InputGroup.Text>/</InputGroup.Text>
                <FormControl
                  type='number'
                  placeholder='Año'
                  onChange={(event) => setCardExpirationYear(event.target.value)}
                />
              </InputGroup>
              <FormControl style={{ width: '40%' }}
                type='number'
                placeholder='Código de seguridad (reverso de tarjeta)'
                onChange={(event) => setCardSecurityCode(event.target.value)}
              />
            </div>
          ) : null}
          {getPaymentType === 'Tarjeta de Crédito' ? (
            <div>
              <FormControl style={{ width: '40%' }}
                type='text'
                placeholder='Nombre y Apellido (como figuran en la tarjeta)'
                onChange={(event) => setPayerName(event.target.value)}
              />
              <FormControl style={{ width: '40%' }}
                type='number'
                placeholder='Número de tarjeta'
                onChange={(event) => setCardNumber(event.target.value)}
              />
              <p>Fecha de caducidad:</p>
              <InputGroup style={{ width: '20%' }}>
                <FormControl
                  type='number'
                  placeholder='Mes'
                  onChange={(event) => setCardExpirationMounth(event.target.value)}
                />
                <InputGroup.Text>/</InputGroup.Text>
                <FormControl
                  type='number'
                  placeholder='Año'
                  onChange={(event) => setCardExpirationYear(event.target.value)}
                />
              </InputGroup>
              <FormControl style={{ width: '40%' }}
                type='number'
                placeholder='Código de seguridad (reverso de tarjeta)'
                onChange={(event) => setCardSecurityCode(event.target.value)}
              />
              <h2>Elegir cuotas:</h2>
              <FormCheck type='radio' id='inline-radio' name='group4'
                label='1 cuota'
                checked={true}
                onChange={() => setAmountOfPayments('1')}
              />
              <FormCheck type='radio' id='inline-radio' name='group4'
                label='3 cuotas'
                onChange={() => setAmountOfPayments('3')}
              />
            </div>
          ) : null}
        </PurchaseSection>
        <button className="align-self-center bg-light d-flex flex-column" disabled={cartContext.size === 0} onClick={() => concludePurchase()} id='BotonPagar'>Finalizar Compra</button>
      </div>
      {defaultToastMessage}
    </div>
  )
}

export default Purchase
