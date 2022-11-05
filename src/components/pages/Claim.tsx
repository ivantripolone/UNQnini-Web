import { useState, useContext } from 'react'
import Send_Button from '../../assets/Send_Button.png'
import Send_Disabled_Button from '../../assets/Send_Disabled_Button.png'
import { ClaimContextType, DataContext } from '../../context/DataContext'
import { ClaimType } from "../../types/claim"
import claimService from "../../services/claimService"
import { ToastContextType } from '../../context/ToastContext'

const Claim = () => {
    const { claimID } = useContext(DataContext) as ClaimContextType
    const [getClaimType, setClaimType] = useState('')
    const [getTextAreaContent, setTextAreaContent] = useState('')
    const { setMessage } = useContext(DataContext) as ToastContextType

    const claimToSend: ClaimType = {
        productID: claimID,
        type: getClaimType,
        textContent: getTextAreaContent
    }

    const sendClaim = () => {
        claimService.postClaim(claimToSend)
        .then(() => { setMessage('Tu reclamo se envió correctamente') })
        .catch(() => { setMessage('Hubo un error al enviar su reclamo, pruebe mas tarde') })
    }

    return (
      <div className='d-flex flex-column ProductTableContainer'>
        <b>Seleccione el tipo de reclamo:</b>
        <select className="form-select" id="claimSelect" aria-label="Default select example" onChange={(event) => {setClaimType(event.target.value)}}>
            <option selected>Tipo de reclamo</option>
            <option value="Producto">Producto</option>
            <option value="Servicio">Servicio</option>
            <option value="3">Otro</option>
        </select>
        <b>Ingrese la información relacionada con el reclamo:</b>        
        <textarea onChange={(event) => {setTextAreaContent(event.target.value)}}></textarea>
        <div className='registerButton'>
        {(getClaimType !== '' && getTextAreaContent !== '')  ? 
            <button id='BotonRegistrarse' onClick={sendClaim}> <img src={Send_Button} alt='' /></button> :
            <button id='BotonPagarProductos'> <img alt='' src={Send_Disabled_Button} /> </button>
        }   
        </div>
      </div>
    )
      
  }
  
  export default Claim