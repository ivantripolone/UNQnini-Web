import { FormControl } from 'react-bootstrap'
import Login_Button from '../../assets/Login_Button.png'
import Recover_Password_Button from '../../assets/Recover_Password_Button.png'
import ToastMessage from './ToastMessage'
import { useState, useEffect, useContext } from 'react'
import { DataContext } from '../../context/DataContext'
import { SessionContextType } from '../../context/SessionContext'
import { LoginData } from '../../types/loginData'
import { RecoverPasswordData } from '../../types/recoverPasswordData'
import { traducir } from '../extas/Traductor'
import loginService from '../../services/loginService'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const { setLogueado, setUsername } = useContext(DataContext) as SessionContextType
  const [getUserName, setUserName] = useState('')
  const [getPassword, setPassword] = useState('')
  const [getShowFlag, setShowFlag] = useState('')
  const [getMessage, setMessage] = useState(
    'Bienvenido a UNQNINI WEB, ingrese Usuario y Contraseña para iniciar sesión'
  )
  const defaultToastMessage = (
    <ToastMessage
      getMessage={getMessage}
      getShowFlag={getShowFlag}
      setShowFlag={setShowFlag}
    />
  )
  const navigate = useNavigate()

  const loginData: LoginData = {
    userName: getUserName,
    password: getPassword,
  }

  const recoverPasswordData: RecoverPasswordData = {
    userName: getUserName,
  }

  const recoverPassword = () => {
    loginService
      .postRecoverPassword(recoverPasswordData)
      .then((response: { data: { password: string } }) => {
        setShowFlag('show')
        setMessage('Su contraseña es ' + response.data.password)
      })
      .catch(() => {
        setShowFlag('show')
        setMessage('No es posible recuperar una contraseña para ese usuario')
      })
  }

  const login = () => {
    loginService
      .postLogin(loginData)
      .then((response: { data: { areTheUserDetailsCorrect: boolean } }) => {
        setLogueado(response.data.areTheUserDetailsCorrect)
        setUsername(getUserName)
        navigate('/')
      })
      .catch((response: { response: { data: { errors: { field: string; defaultMessage: string }[] } } }) => {
        setShowFlag('show')
        setMessage(
          'Error: El dato ingresado en el campo ' +
            traducir(response.response.data.errors[0].field) +
            ' ' +
            response.response.data.errors[0].defaultMessage
        )
      })
  }

  useEffect(() => {
    setShowFlag('show')
  }, [getMessage])

  return (
    <div className='d-flex flex-column LoginTableContainer'>
      <div className='row'>
        <div className='col LoginForms'>
          <FormControl
            className='UserNameCase'
            style={{ width: '80%' }}
            type='text'
            placeholder='Usuario'
            onChange={(event) => setUserName(event.target.value)}
          />
          <FormControl
            className='PasswordCase'
            style={{ width: '80%' }}
            type='password'
            placeholder='Contraseña'
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
        <div className='col LoginButtons'>
          <button
            onClick={() => login()}
            id='BotonPagarProductos'
          >
            {' '}
            <img
              alt=''
              src={Login_Button}
            />{' '}
          </button>
          <button
            onClick={() => recoverPassword()}
            id='BotonPagarProductos'
          >
            {' '}
            <img
              alt=''
              src={Recover_Password_Button}
            />{' '}
          </button>
        </div>
      </div>
      {defaultToastMessage}
    </div>
  )
}

export default Login
