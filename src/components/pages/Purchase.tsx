import { useState } from 'react'
import { FormCheck, FormControl } from 'react-bootstrap'
import PurchaseSection from './PurchaseSection'

const Purchase = () => {
  const [tipoDeEnvio, setTipoDeEnvio] = useState('Retiro')
  const [tipoDePago, setTipoDePago] = useState('')
  const [abonoJusto, setAbonoJusto] = useState(true)

  return (
    <div className='PurchasePage'>
      <div className='my-4 d-flex flex-column gap-3'>
        <PurchaseSection title={'DATOS'}>
          <div className='d-flex flex-column gap-3'>
            <FormControl
              style={{ width: '40%' }}
              type='text'
              placeholder='Nombre y Apellido'
            />
            <FormControl
              style={{ width: '40%' }}
              type='text'
              placeholder='Nombre del comercio'
            />
            <FormControl
              style={{ width: '40%' }}
              type='number'
              placeholder='CUIT del comercio'
            />
            <FormControl
              style={{ width: '40%' }}
              type='text'
              placeholder='Dirección del comercio'
            />
          </div>
        </PurchaseSection>
        <PurchaseSection title={'ENVIO'}>
          <div>
            <FormCheck
              type='radio'
              id='inline-radio'
              name='group1'
              label='Retirar producto'
              checked={tipoDeEnvio === 'Retiro'}
              onChange={() => setTipoDeEnvio('Retiro')}
            />
            <FormCheck
              type='radio'
              id='inline-radio'
              name='group1'
              label='Enviar producto'
              onChange={() => setTipoDeEnvio('Envio')}
            />
            {tipoDeEnvio === 'Envio' ? (
              <div>
                <FormControl
                  style={{ width: '40%' }}
                  type='text'
                  placeholder='Dirección de envío'
                />
              </div>
            ) : null}
          </div>
        </PurchaseSection>
        <PurchaseSection title={'PAGO'}>
          <FormCheck
            type='radio'
            id='inline-radio'
            name='group2'
            label='Pago en efectivo'
            onChange={() => setTipoDePago('Efectivo')}
          />
          <FormCheck
            type='radio'
            id='inline-radio'
            name='group2'
            label='Pago con tarjeta de débito'
            onChange={() => {
              setTipoDePago('')
            }}
          />
          <FormCheck
            type='radio'
            id='inline-radio'
            name='group2'
            label='Pago con tarjeta de crédito'
            onChange={() => {
              setTipoDePago('')
            }}
          />
          {tipoDePago === 'Efectivo' ? (
            <div>
              <p>Abona cantidad exacta:</p>
              <FormCheck
                type='radio'
                id='inline-radio'
                name='group3'
                label='Sí'
                checked={abonoJusto}
                onChange={() => {
                  setAbonoJusto(true)
                }}
              />
              <FormCheck
                type='radio'
                id='inline-radio'
                name='group3'
                label='No'
                onChange={() => {
                  setAbonoJusto(false)
                }}
              />
              {abonoJusto ? null : (
                <FormControl
                  style={{ width: '40%' }}
                  type='number'
                  placeholder='Cantidad para abono'
                />
              )}
            </div>
          ) : null}
        </PurchaseSection>
      </div>
    </div>
  )
}

export default Purchase
