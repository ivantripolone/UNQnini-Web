import { useState } from 'react'
import { Col, Container, FormCheck, FormControl, FormLabel, Row } from 'react-bootstrap'

const Purchase = () => {
  const [tipoDeEnvio, setTipoDeEnvio] = useState('Retiro')

  return (
    <div className='PurchasePage'>
      <div className='PurchaseContainer'>
        <Container>
          <Row>
            <Col>
              <p>Datos del comprador:</p>
              <FormControl
                type='text'
                placeholder='Nombre y Apellido'
              />
              <FormControl
                type='text'
                placeholder='Nombre del comercio'
              />
              <FormControl
                type='number'
                placeholder='CUIT del comercio'
              />
              <FormControl
                type='text'
                placeholder='Dirección del comercio'
              />
            </Col>
            <Col>
              <p>Datos de envío:</p>
              <div>
                {tipoDeEnvio == 'Envio' ? (
                  <div>
                    <FormLabel>Dirección de envío:</FormLabel>
                    <FormControl type='text' />
                  </div>
                ) : (
                  <div>Se retira en nuestra sucursal.</div>
                )}
              </div>
            </Col>
            <Col> Datos de pago </Col>
          </Row>
          <Row>
            <Col>
              <p> Selección de envío: </p>
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
            </Col>
            <Col> Selección de pago </Col>
            <Col> Pagar </Col>
          </Row>
        </Container>
      </div>
    </div>
  )
}

export default Purchase
