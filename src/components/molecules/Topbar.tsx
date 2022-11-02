import { useNavigate } from 'react-router'
import { Container, Dropdown, DropdownButton, Navbar } from 'react-bootstrap'
import unqniniWebLogo from '../../assets/unqnini-web-logo.png'
import carrito from '../../assets/carrito.png'
import usericon from '../../assets/usericon.png'
import { useContext } from 'react'
import { DataContext } from '../../context/DataContext'
import { SessionContextType } from '../../context/SessionContext'

const Topbar = () => {
  const navigate = useNavigate()
  const { logueado, setLogueado } = useContext(DataContext) as SessionContextType

  const handleClick = () => {
    navigate('/')
  }

  const handleCartClick = () => {
    navigate('/cart')
  }

  const login = () => {
    navigate('/login')
  }

  const logout = () => {
    setLogueado(false)
    navigate('/')
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
            alt='cart'
            style={{ cursor: 'pointer' }}
          />
        </Navbar.Collapse>
        <DropdownButton title={<img src={usericon} width='30' height='30' />}>
          {logueado
            ?
            <div>
              <Dropdown.Item onClick={() => navigate('/profile')}>Ver Perfil</Dropdown.Item>
              <Dropdown.Item onClick={logout}> Cerrar Sesión </Dropdown.Item>
            </div>
            :
            <Dropdown.Item onClick={login}>Iniciar Sesión</Dropdown.Item>
          }
        </DropdownButton>
      </Container>
    </Navbar>
  )
}

export default Topbar
