import { useContext, useEffect, useState } from "react"
import { DataContext } from "../../context/DataContext"
import { SessionContextType } from "../../context/SessionContext"
import { PurchaseData } from "../../types/purchase"
import { Username } from "../../types/username"
import PurchaseTableElement from "../extas/PurchaseDataTableElement"
import orderService from '../../services/orderService'
import { Table } from "react-bootstrap"


const MyPurchases = () => {
  const { username } = useContext(DataContext) as SessionContextType
  const [getPurchases, setPurchases] = useState<PurchaseData[]>([])
  const usernameLogued: Username = { username: username }
 

  useEffect(() => {
    orderService.postMyPurchases(usernameLogued)
    .then((response: { data: PurchaseData[] }) => { setPurchases(response.data) })}, [])
  

  const tableElements = getPurchases.map((purchase) => {
    return (
      <PurchaseTableElement
        key={`PurchaseTableElementKey_${purchase.id}`}
        {...purchase}
      />
    )
  })

  return (
    <div className='d-flex flex-column PurchaseTableContainer'>
    {(getPurchases.length === 0) ? <b className="m-auto">Aun no se efectuaron compras</b> : 
      <Table borderless>
        <thead>
          <tr>
            <th> Fecha de compra </th>
            <th> Informacion del pedido </th>
            <th> Valor Total (sin descuento) </th>
            <th> Descuento % </th>
            <th> Abonado </th>
            <th> </th>
          </tr>
        </thead>
        <tbody>{tableElements}</tbody>
      </Table>}
    </div>)
}

export default MyPurchases
