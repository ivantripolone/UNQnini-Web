import { useState, useContext } from 'react'
import Send_Button from '../../assets/Send_Button.png'
import Send_Disabled_Button from '../../assets/Send_Disabled_Button.png'
import { DataContext } from '../../context/DataContext'
import { ProductsContextType } from '../../context/ProductsContext'
import { ClaimType } from "../../types/claim"
import claimService from "../../services/claimService"
import { ToastContextType } from '../../context/ToastContext'

const Claim = () => {
  const { productClaim } = useContext(DataContext) as ProductsContextType
  const [getClaimType, setClaimType] = useState('')
  const [getTextAreaContent, setTextAreaContent] = useState('')
  const { setMessage } = useContext(DataContext) as ToastContextType

  const claimToSend: ClaimType = {
    productID: productClaim,
    type: getClaimType,
    textContent: getTextAreaContent
  }

  const sendClaim = () => {
    claimService.postClaim(claimToSend)
      .then(() => { setMessage('Tu reclamo se envió correctamente') })
      .catch(() => { setMessage('Hubo un error al enviar su reclamo, intente mas tarde') })
  }

  return (
    <div className='d-flex flex-column claimContainer' style={{ alignItems: 'center' }}>
      <h3>Seleccione el tipo de reclamo:</h3>
      <select className="form-select" id="claimSelect" aria-label="Default select example" style={{ width: '50%' }}
        onChange={(event) => { setClaimType(event.target.value) }}>
        <option selected>Tipo de reclamo</option>
        <option>Producto</option>
        <option>Servicio</option>
        <option>Otro</option>
      </select>
      <b>Ingrese la información relacionada con el reclamo:</b>
      <textarea onChange={(event) => { setTextAreaContent(event.target.value) }} style={{ width: '60%' }}></textarea>
      <div className='claimButton'>
        {(getClaimType !== '' && getTextAreaContent !== '') ?
          <button id='BotonReclamo' onClick={sendClaim}> <img src={Send_Button} alt='' /></button> :
          <button id='BotonReclamo'> <img alt='' src={Send_Disabled_Button} /> </button>
        }
      </div>
    </div>
  )

}

export default Claim