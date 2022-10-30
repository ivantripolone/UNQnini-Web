import { useContext, useEffect, useState } from 'react'
import { Button, Col, FormControl, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import usericon from '../../assets/usericon.png'
import { DataContext } from '../../context/DataContext'
import { SessionContextType } from '../../context/SessionContext'
import userService from '../../services/userService'
import { User } from '../../types/user'

const Profile = () => {
  const { username } = useContext(DataContext) as SessionContextType

  const initialUser = {
    username: username,
    password: '',
    name: '',
    cuit: 1234,
    businessName: '',
    businessAddress: '',
  }

  const [modificando, setModificando] = useState(false)
  const navigate = useNavigate()
  const [user, setUser] = useState<User>(initialUser)

  useEffect(() => {
    userService
      .getUser(username!)
      .then((user) => {
        setUser(user)
      })
      .catch((error) => navigate(`/error/${error.response.status}`, { replace: true }))
  }, [navigate, username])

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
            <h2>{username}</h2>
          </Row>
        </div>
      </Col>
      <Col>
        <div className='d-flex flex-column ProfileInfo'>
          <Row>
            <FormControl
              type='text'
              defaultValue={user.name}
              plaintext={!modificando}
              disabled={!modificando}
            />
            <FormControl
              type='number'
              defaultValue={user.cuit}
              plaintext={!modificando}
              disabled={!modificando}
            />
            <FormControl
              type='text'
              defaultValue={user.businessName}
              plaintext={!modificando}
              disabled={!modificando}
            />
            <FormControl
              type='text'
              defaultValue={user.businessAddress}
              plaintext={!modificando}
              disabled={!modificando}
            />
            <FormControl
              type='password'
              defaultValue={user.password}
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
