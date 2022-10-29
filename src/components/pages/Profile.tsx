import { useState } from 'react'
import { Button, Col, FormControl, Row } from 'react-bootstrap'
import usericon from '../../assets/usericon.png'

const Profile = () => {
  const [modificando, setModificando] = useState(false)

  return (
    <div className='d-flex flex-row ProfilePage'>
      <Col>
        <div className='d-flex flex-column ProfileCard'>
          <Row>
            <img
              src={usericon}
              width='256'
              height='256'
              alt=''
            />
          </Row>
          <Row>
            <h2>user</h2>
          </Row>
        </div>
      </Col>
      <Col>
        <div className='d-flex flex-column ProfileInfo'>
          <Row>
            <FormControl
              type='text'
              placeholder='Nombre y Apellido'
              plaintext={!modificando}
              disabled={!modificando}
            />
            <FormControl
              type='number'
              placeholder='CUIT'
              plaintext={!modificando}
              disabled={!modificando}
            />
            <FormControl
              type='text'
              placeholder='Nombre del comercio'
              plaintext={!modificando}
              disabled={!modificando}
            />
            <FormControl
              type='text'
              placeholder='Direccion del comercio'
              plaintext={!modificando}
              disabled={!modificando}
            />
            <FormControl
              type='password'
              placeholder='Contraseña'
              plaintext={!modificando}
              disabled={!modificando}
            />
          </Row>
          <Row>
            {modificando ? (
              <Button onClick={() => setModificando(false)}>Guardar cambios</Button>
            ) : (
              <Button onClick={() => setModificando(true)}>Modificar datos</Button>
            )}
            <Button>Ver Compras realizadas</Button>
          </Row>
        </div>
      </Col>
    </div>
  )
}

export default Profile
