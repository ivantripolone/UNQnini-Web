import { useContext, useEffect, useState } from "react"
import { FormControl, FormGroup } from "react-bootstrap"
import { useNavigate } from "react-router-dom"
import registerbutton from '../../assets/Register_Button.png'
import { DataContext } from "../../context/DataContext"
import { SessionContextType } from "../../context/SessionContext"
import { ToastContextType } from "../../context/ToastContext"
import userService from "../../services/userService"
import { User } from "../../types/user"
import { traducir } from '../extas/Traductor'

const Register = () => {

    const { logueado, setLogueado } = useContext(DataContext) as SessionContextType
    const { setMessage } = useContext(DataContext) as ToastContextType
    const navigate = useNavigate()
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [fullname, setFullname] = useState('')
    const [cuit, setCuit] = useState('')
    const [businessName, setBusinessName] = useState('')
    const [businessAddress, setBusinessAddress] = useState('')

    const registerData: User = {
        username: username,
        password: password,
        fullname: fullname,
        cuit: cuit,
        businessName: businessName,
        businessAddress: businessAddress
    }

    const register = () => {
        console.log(registerData)
        userService.postRegister(registerData)
            .then(() => {
                setLogueado(true)
                navigate('/')
            })
        /*
        .catch((response: { response: { data: { errors: { field: string; defaultMessage: string }[] } } }) => {
            setMessage(
                'Error: El dato ingresado en el campo ' +
                traducir(response.response.data.errors[0].field) +
                ' ' +
                response.response.data.errors[0].defaultMessage
            )

        })
        */
    }

    useEffect(() => { if (logueado) navigate('/') })

    return (
        <div className='d-flex flex-column registerContainer'>
            <div className='registerFields'>
                <FormGroup >
                    <FormControl type='text' placeholder='Nombre de usuario'
                        onChange={(event) => setUsername(event.target.value)} />
                    <FormControl type='password' placeholder='Contraseña'
                        onChange={(event) => setPassword(event.target.value)} />
                    <FormControl type='text' placeholder='Nombre y Apellido'
                        onChange={(event) => setFullname(event.target.value)} />
                    <FormControl type='text' placeholder='CUIT'
                        onChange={(event) => setCuit(event.target.value)} />
                    <FormControl type='text' placeholder='Nombre del comercio'
                        onChange={(event) => setBusinessName(event.target.value)} />
                    <FormControl type='text' placeholder='Dirección del comercio'
                        onChange={(event) => setBusinessAddress(event.target.value)} />
                    <FormControl type='text' placeholder='URL de Imagen' />
                </FormGroup>
            </div>
            <div className='registerButton'>
                <button id='BotonRegistrarse' onClick={register}> <img src={registerbutton} alt='' /></button>
            </div>
        </div>
    )
}

export default Register