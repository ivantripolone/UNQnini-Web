import { Col, Container, Row } from 'react-bootstrap'

const Purchase = () => {
  return (
    <div className='PurchasePage'>
      <div className='PurchaseContainer'>
        <Container>
          <Row>
            <Col> Datos del comprador </Col>
            <Col> Datos de envío </Col>
            <Col> Datos de pago </Col>
          </Row>
          <Row>
            <Col> Selección de envío </Col>
            <Col> Selección de pago </Col>
            <Col> Pagar </Col>
          </Row>
        </Container>
      </div>
    </div>
  )
}

export default Purchase
