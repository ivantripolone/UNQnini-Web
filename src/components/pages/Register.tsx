import { FormControl, FormGroup } from "react-bootstrap"
import registerbutton from '../../assets/Register_Button.png'

const Register = () => {

    const register = () => {

    }

    return (
        <div className='d-flex flex-column registerContainer'>
            <div className='registerFields'>
                <FormGroup >
                    <FormControl type='text' placeholder='Nombre de usuario' />
                    <FormControl type='password' placeholder='Contraseña' />
                    <FormControl type='text' placeholder='Nombre y Apellido' />
                    <FormControl type='text' placeholder='CUIT' />
                    <FormControl type='text' placeholder='Nombre del comercio' />
                    <FormControl type='text' placeholder='Dirección del comercio' />
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