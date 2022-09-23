import { useContext, useEffect, useState } from 'react'
import { CartProduct, CartProductContextType } from '../context/types'
import Delete_Button from '../../src/img/Delete_Button.png'
import { DataContext } from '../context/DataContext'


const TableElement = ({id, title, quantity, price, stock} : CartProduct) => {
    const { cartContext , setCartContext } = useContext(DataContext) as CartProductContextType
    const [quantitySelected, setQuantitySelected]= useState<number>(quantity as number)

    const handleDelete = (productId : string) => {
        cartContext.delete(productId)
        setCartContext(new Map(cartContext))
    } 

    useEffect(() => { 
        const cartProduct = { id: id, title: title, quantity: quantitySelected, price: price, stock : stock } as CartProduct
        cartContext.set(id, cartProduct)
        setCartContext(new Map(cartContext))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [quantitySelected])

    return(
        <tr key={`TRKey_${id}`}>
            <th>{title}</th>
            <th>
                {<select className='form-select mb-3' value={quantitySelected} onChange={(event) => {setQuantitySelected(parseInt(event.target.value))}} aria-label='Default select example'>
                {[...Array(stock)].map((_, i) => ( <option key={i + 1} value={`${i + 1}`}>{`${i + 1}`}</option> ))}
                </select>}
            </th>
            <th>${(quantitySelected * (price as number)).toString()}</th>
            <th><button onClick={() => handleDelete(id)} id='BotonEliminarProducto'><img alt='Boton de eliminar producto' src={Delete_Button}/></button></th>
        </tr>)
}

export default TableElement