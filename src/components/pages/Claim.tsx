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
        setClaimType("Tipo de reclamo");
        (document.getElementById("textAreaMessage") as HTMLTextAreaElement).value = '';
        (document.getElementById("claimSelect") as HTMLSelectElement).value = 'Tipo de reclamo';
    }

    return (
      <div className='d-flex flex-column ProductTableContainer'>
        <b>Seleccione el tipo de reclamo:</b>
        <select className="form-select" id="claimSelect" defaultValue={"Tipo de reclamo"}  aria-label="Default select example" onChange={(event) => {setClaimType(event.target.value)}}>
            <option selected>Tipo de reclamo</option>
            <option value="Producto">Producto</option>
            <option value="Servicio">Servicio</option>
            <option value="Otro">Otro</option>
        </select>
        <b>Ingrese la información relacionada con el reclamo:</b>        
        <textarea id="textAreaMessage" onChange={(event) => {setTextAreaContent(event.target.value)}}></textarea>
        <div className='registerButton'>
        {((getClaimType !== 'Tipo de reclamo'  && getClaimType !== '' ) && getTextAreaContent !== '')  ? 
            <button id='BotonRegistrarse' onClick={sendClaim}> <img src={Send_Button} alt='' /></button> :
            <button id='BotonPagarProductos'> <img alt='' src={Send_Disabled_Button} /> </button>
        }   
        </div>
      </div>
    )
      
  }
  
  export default Claim