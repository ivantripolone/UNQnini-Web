import { useNavigate } from 'react-router'
import { Container, Navbar } from 'react-bootstrap'
import unqniniWebLogo from '../../assets/unqnini-web-logo.png'
import carrito from '../../assets/carrito.png'

const Topbar = () => {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate('/')
  }

  const handleCartClick = () => {
    navigate('/carrito')
  }

  return (
    <Navbar bg='nav'>
      <Container>
        <Navbar.Collapse className='justify-content-start'></Navbar.Collapse>
        <Navbar.Collapse className='justify-content-center'>
          <Navbar.Brand>
            <img
              onClick={handleClick}
              src={unqniniWebLogo}
              height='70'
              alt='unqnini web logo'
              className='pe-auto'
              style={{ cursor: 'pointer' }}
            />
          </Navbar.Brand>
        </Navbar.Collapse>
        <Navbar.Collapse className='justify-content-end'>
          <img
            onClick={handleCartClick}
            src={carrito}
            width='30'
            height='30'
            alt='carrito'
            style={{ cursor: 'pointer' }}
          />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Topbar
