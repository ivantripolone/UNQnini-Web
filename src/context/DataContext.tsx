import { createContext, ReactNode, useState } from 'react'
import { CartProduct } from './types'

export const DataContext = createContext({})

interface Props {
  children: ReactNode
}

export const DataProvider = ({ children }: Props) => {
  const [cartContext, setCartContext] = useState<Map<String, CartProduct>>(new Map())

  return <DataContext.Provider value={{ cartContext: cartContext, setCartContext }}>{children}</DataContext.Provider>
}