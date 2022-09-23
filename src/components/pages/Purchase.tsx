import { useState } from 'react'
import { Col, Container, FormCheck, FormControl, FormLabel, Row } from 'react-bootstrap'

const Purchase = () => {
  const [tipoDeEnvio, setTipoDeEnvio] = useState('')

  return (
    <div className='PurchasePage'>
      <div className='PurchaseContainer'>
        <Container>
          <Row>
            <Col> Datos del comprador </Col>
            <Col>
              <p>Datos de envío</p>
              <div>
                {tipoDeEnvio == 'Envio' ? (
                  <div>
                    <FormLabel>Dirección de envío:</FormLabel>
                    <FormControl type='text' />
                  </div>
                ) : (
                  <div></div>
                )}
              </div>
            </Col>
            <Col> Datos de pago </Col>
          </Row>
          <Row>
            <Col>
              <FormCheck
                type='radio'
                id='inline-radio'
                name='group1'
                label='Retirar producto'
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
