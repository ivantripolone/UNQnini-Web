import { useContext, useEffect, useState } from 'react'
import { Col, FormControl, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import usericon from '../../assets/usericon.png'
import { DataContext } from '../../context/DataContext'
import { SessionContextType } from '../../context/SessionContext'
import userService from '../../services/userService'
import { User } from '../../types/user'
import { traducir } from '../extas/Traductor'
import Save_Button from '../../assets/Save_Button.png'
import Modify_Button from '../../assets/Modify_Button.png'
import PurchasesMade_Button from '../../assets/PurchasesMade_Button.png'
import { ToastContextType } from '../../context/ToastContext'

const Profile = () => {
  const { username } = useContext(DataContext) as SessionContextType
  const { setMessage } = useContext(DataContext) as ToastContextType
  const [modificando, setModificando] = useState(false)
  const navigate = useNavigate()
  const [getUserName, setUserName] = useState('')
  const [getPassword, setPassword] = useState('')
  const [getFullname, setFullname] = useState('')
  const [getBusinessName, setBusinessName] = useState('')
  const [getBusinessAddress, setBusinessAddress] = useState('')
  const [getCuit, setCuit] = useState('')
  const [getPictureUrl, setPictureUrl] = useState('')

  const modifiedInformation = () => {
    const userModified: User = {
      username: getUserName,
      password: getPassword,
      fullname: getFullname,
      cuit: getCuit,
      businessName: getBusinessName,
      businessAddress: getBusinessAddress,
      pictureUrl: getPictureUrl
    }

    userService
      .postModifiedInformation(userModified)
      .then(() => {
        setMessage('Tus datos fueron guardados correctamente')
      })
      .catch((response: { response: { data: { errors: { field: string; defaultMessage: string }[] } } }) => {
        setMessage(
          'Error: El campo ' +
          traducir(response.response.data.errors[0].field) +
          ' ' +
          traducir(response.response.data.errors[0].defaultMessage)
        )
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
        setPictureUrl(user.pictureUrl)
      })
      .catch((error) => {
        setMessage('')
        navigate(`/error/${error.response.status}`, { replace: true })
      })
  }, [navigate, username])

  return (
<div className='d-flex flex-row ProfilePage'>
      <Col>
        <div className='d-flex flex-column ProfileCard'>
          <Row> <img src={getPictureUrl} onError={({ currentTarget }) => { currentTarget.onerror = null;  currentTarget.src=usericon; }} width='256' height='256' alt='' /> </Row>
          <Row> <h2 className='d-flex justify-content-center'>{getUserName}</h2> </Row>
        </div>
      </Col>
      <Col>
        <div className='d-flex flex-column ProfileInfo'>
          <Row>
            <b>Nombre y Apellido:</b>
            <FormControl type='text'
              value={getFullname}
              plaintext={!modificando}
              disabled={!modificando}
              onChange={(event) => setFullname(event.target.value)}
            />
            <b>Cuit</b>
            <FormControl type='number'
              value={getCuit}
              plaintext={!modificando}
              disabled={!modificando}
              onChange={(event) => setCuit(event.target.value)}
            />
            <b>Nombre del comercio:</b>
            <FormControl type='text'
              value={getBusinessName}
              plaintext={!modificando}
              disabled={!modificando}
              onChange={(event) => setBusinessName(event.target.value)}
            />
            <b>Direccion del comercio:</b>
            <FormControl type='text'
              value={getBusinessAddress}
              plaintext={!modificando}
              disabled={!modificando}
              onChange={(event) => setBusinessAddress(event.target.value)}
            />
            <b>Contraseña:</b>
            <FormControl type='password'
              value={getPassword}
              plaintext={!modificando}
              disabled={!modificando}
              onChange={(event) => setPassword(event.target.value)}
            />
          </Row>
        </div>
      </Col>
      <div className='col LoginButtons'>
        {modificando
          ?
          <button id='BotonPagarProductos'
            onClick={() => {
              setModificando(false)
              modifiedInformation()
            }}>
            <img alt='' src={Save_Button} />
          </button>
          :
          <button id='BotonPagarProductos' onClick={() => setModificando(true)}>
            <img alt='' src={Modify_Button} />
          </button>
        }
        <button id='BotonPagarProductos' onClick={() => {
          setMessage('')
          navigate('/mypurchases')
        }}>
          <img alt='' src={PurchasesMade_Button} />
        </button>
      </div>
    </div>
  )
}

export default Profile
