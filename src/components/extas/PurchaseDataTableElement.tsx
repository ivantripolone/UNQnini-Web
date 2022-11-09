import { useContext, useState } from "react";
import { Button, Modal, Table } from "react-bootstrap";
import { useNavigate } from "react-router-dom"
import { ClaimContextType, DataContext } from "../../context/DataContext";
import { SessionContextType } from "../../context/SessionContext";
import { PurchaseData } from "../../types/purchase"
import PurchaseProductTableElement from "./PurchaseProductTableElement";
import Claim_Button from "../../assets/Claim_Button.png";

const PurchaseDataTableElement = ({ id, purchasesProducts, discount, total }: PurchaseData) => {
    const { setClaimID } = useContext(DataContext) as ClaimContextType
    const { username } = useContext(DataContext) as SessionContextType
    const navigate = useNavigate()
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const tableElements = purchasesProducts.map((purchase) => {
        return (
            <PurchaseProductTableElement
                key={`PurchaseTableElementKey_${purchase.id}`}
                {...purchase}
            />
        )
    })

    return (
        <tr key={`TRKey_${id}`}>
            <th>{id}</th>
            <th>{
                <div>
                    <Button variant="primary" onClick={handleShow}>Ver Detalle</Button>
                    <Modal show={show} onHide={handleClose}>

                        <Modal.Header closeButton>
                            <Modal.Title>Productos abonados</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Table borderless>
                                <thead>
                                    <tr>
                                        <th> Nombre </th>
                                        <th> Cantidad Adquirida </th>
                                    </tr>
                                </thead>
                                <tbody>{tableElements}</tbody>
                            </Table>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                                Close
                            </Button>
                        </Modal.Footer>
                    </Modal>
                </div>
            }
            </th>
            <th>{total}</th>
            <th>{discount}</th>
            <th>{total - (total * (discount / 100))}</th>
            <th><button onClick={() => { setClaimID(id + ' ' + username); navigate('/claim') }} id='BotonEliminarProducto'><img alt='' src={Claim_Button} width='120' /></button></th>
        </tr>)
}

export default PurchaseDataTableElement

