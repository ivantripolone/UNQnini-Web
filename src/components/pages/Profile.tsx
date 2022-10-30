import { useContext, useEffect, useState } from 'react'
import { Col, FormControl, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import usericon from '../../assets/usericon.png'
import { DataContext } from '../../context/DataContext'
import { SessionContextType } from '../../context/SessionContext'
import userService from '../../services/userService'
import { User } from '../../types/user'
import ToastMessage from './ToastMessage'
import { traducir } from '../extas/Traductor'
import Save_Button from '../../assets/Save_Button.png'
import Modify_Button from '../../assets/Modify_Button.png'
import PurchasesMade_Button from '../../assets/PurchasesMade_Button.png'

const Profile = () => {
  const { username } = useContext(DataContext) as SessionContextType
  const [modificando, setModificando] = useState(false)
  const navigate = useNavigate()
  const [getUserName, setUserName] = useState('')
  const [getPassword, setPassword] = useState('')
  const [getFullname, setFullname] = useState('')
  const [getBusinessName, setBusinessName] = useState('')
  const [getBusinessAddress, setBusinessAddress] = useState('')
  const [getCuit, setCuit] = useState('')
  const [getShowFlag, setShowFlag] = useState('')
  const [getMessage, setMessage] = useState('')
  const defaultToastMessage = (
    <ToastMessage
      getMessage={getMessage}
      getShowFlag={getShowFlag}
      setShowFlag={setShowFlag}
    />
  )

  const modifiedInformation = () => {
    const userModified: User = {
      username: getUserName,
      password: getPassword,
      fullname: getFullname,
      cuit: getCuit,
      businessName: getBusinessName,
      businessAddress: getBusinessAddress,
    }

    userService
      .postModifiedInformation(userModified)
      .then(() => {
        setMessage('Tus datos fueron guardados correctamente')
        setShowFlag('show')
      })
      .catch((response: { response: { data: { errors: { field: string; defaultMessage: string }[] } } }) => {
        setMessage(
          'Error: El campo ' +
            traducir(response.response.data.errors[0].field) +
            ' ' +
            traducir(response.response.data.errors[0].defaultMessage)
        )
        setShowFlag('show')
      })
  }

  useEffect(() => {
    userService
      .getUser(username!)
      .then((user: User) => {
        setUserName(user.username)
        setPassword(user.password)
        setFullname(user.fullname)
        setBusinessName(user.businessName)
        setBusinessAddress(user.businessAddress)
        setCuit(user.cuit)
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
            <h2 className='d-flex justify-content-center'>{getUserName}</h2>
          </Row>
        </div>
      </Col>
      <Col>
        <div className='d-flex flex-column ProfileInfo'>
          <Row>
            <b>Nombre y Apellido:</b>
            <FormControl
              type='text'
              defaultValue={getFullname}
              plaintext={!modificando}
              disabled={!modificando}
              onChange={(event) => setFullname(event.target.value)}
            />
            <b>Cuit</b>
            <FormControl
              type='number'
              defaultValue={getCuit}
              plaintext={!modificando}
              disabled={!modificando}
              onChange={(event) => setCuit(event.target.value)}
            />
            <b>Nombre del comercio:</b>
            <FormControl
              type='text'
              defaultValue={getBusinessName}
              plaintext={!modificando}
              disabled={!modificando}
              onChange={(event) => setBusinessName(event.target.value)}
            />
            <b>Direccion del comercio:</b>
            <FormControl
              type='text'
              defaultValue={getBusinessAddress}
              plaintext={!modificando}
              disabled={!modificando}
              onChange={(event) => setBusinessAddress(event.target.value)}
            />
            <b>Contraseña:</b>
            <FormControl
              type='password'
              defaultValue={getPassword}
              plaintext={!modificando}
              disabled={!modificando}
              onChange={(event) => setPassword(event.target.value)}
            />
          </Row>
        </div>
      </Col>
      <div className='col LoginButtons'>
        {modificando ? (
          <button
            onClick={() => {
              setModificando(false)
              modifiedInformation()
            }}
            id='BotonPagarProductos'
          >
            {' '}
            <img
              alt=''
              src={Save_Button}
            />{' '}
          </button>
        ) : (
          <button
            onClick={() => {
              setModificando(true)
            }}
            id='BotonPagarProductos'
          >
            {' '}
            <img
              alt=''
              src={Modify_Button}
            />{' '}
          </button>
        )}
        <button
          onClick={() => {
            navigate('/mypurchases')
          }}
          id='BotonPagarProductos'
        >
          {' '}
          <img
            alt=''
            src={PurchasesMade_Button}
          />{' '}
        </button>
      </div>

      {defaultToastMessage}
    </div>
  )
}

export default Profile
