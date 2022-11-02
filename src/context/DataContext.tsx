import { createContext, ReactNode, useState } from 'react'
import { CartProduct } from '../types/cartProduct'

export const DataContext = createContext({})

interface Props {
  children: ReactNode
}

export const DataProvider = ({ children }: Props) => {
  const [cartContext, setCartContext] = useState<Map<String, CartProduct>>(new Map())
  const [getErrorMessagesForProducts, setErrorMessagesForProducts] = useState('')
  const [logueado, setLogueado] = useState(false)
  const [username, setUsername] = useState('')
  const [message, setMessage] = useState('')

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
        setMessage
      }}
    >
      {children}
    </DataContext.Provider>
  )
}
