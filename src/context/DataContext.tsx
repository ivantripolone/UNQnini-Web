import { createContext, ReactNode, useState } from 'react'
import { CartProduct } from '../types/cartProduct'

export const DataContext = createContext({})

export type CartContextType = {
  total: number
  setTotal: React.Dispatch<React.SetStateAction<number>>
  setDiscount: React.Dispatch<React.SetStateAction<number>>
  discount: number
}

export type ClaimContextType = {
  claimID: string
  setClaimID: React.Dispatch<React.SetStateAction<string>>
}

interface Props {
  children: ReactNode
}

export const DataProvider = ({ children }: Props) => {
  const [cartContext, setCartContext] = useState<Map<String, CartProduct>>(new Map())
  const [getErrorMessagesForProducts, setErrorMessagesForProducts] = useState('')
  const [logueado, setLogueado] = useState(false)
  const [username, setUsername] = useState(null)
  const [message, setMessage] = useState('')
  const [total, setTotal] = useState('')
  const [discount, setDiscount] = useState('')
  const [claimID, setClaimID] = useState('')

  return (
    <DataContext.Provider
      value={{
        cartContext: cartContext,
        setCartContext,
        getErrorMessagesForProducts,
        setErrorMessagesForProducts,
        logueado,
        setLogueado,
        username,
        setUsername,
        message,
        setMessage,
        total,
        setTotal,
        discount,
        setDiscount,
        claimID,
        setClaimID
      }}
    >
      {children}
    </DataContext.Provider>
  )
}
