import { Button, Col, FormControl, Row } from 'react-bootstrap'

const Profile = () => {
  //mock de usuario logueado
  const userData = {
    username: 'user',
    pictureUrl: 'https://i.imgur.com/5woimoe.jpeg',
    name: 'Juan Perez',
    cuit: '1234567812345678',
    shopname: 'Tienda Perez',
    shopaddress: 'H. Yrigoyen 2350',
    password: '123456',
  }

  return (
    <div className='d-flex flex-row ProfilePage'>
      <Col>
        <div className='d-flex flex-column ProfileCard'>
          <Row>
            <img
              src={userData.pictureUrl}
              width='256'
              height='256'
              alt='imagen'
            />
          </Row>
          <Row>
            <h2>{userData.username}</h2>
          </Row>
        </div>
      </Col>
      <Col>
        <div className='d-flex flex-column ProfileInfo'>
          <Row>
            <FormControl
              type='text'
              placeholder={userData.name}
              disabled
            />
            <FormControl
              type='text'
              placeholder={userData.cuit}
              disabled
            />
            <FormControl
              type='text'
              placeholder={userData.shopname}
              disabled
            />
            <FormControl
              type='text'
              placeholder={userData.shopaddress}
              disabled
            />
            <FormControl
              type='password'
              placeholder='Contraseña'
              disabled
            />
          </Row>
          <Row>
            <Button>Modificar datos</Button>
            <Button>Ver Compras realizadas</Button>
          </Row>
        </div>
      </Col>
    </div>
  )
}

export default Profile
