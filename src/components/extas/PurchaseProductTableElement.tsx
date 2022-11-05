import { PurchaseProductData } from "../../types/purchase";

const PurchaseProductTableElement = ({id,name, count} : PurchaseProductData) => {
    return (
    <tr key={`TRKey_${id}`}>
    <th>{name}</th>
    <th>{count}</th>
    </tr>)
}

export default PurchaseProductTableElement