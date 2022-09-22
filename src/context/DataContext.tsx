import { createContext, ReactNode, useState } from 'react'
import { PurchaseData } from './types'

export const DataContext = createContext({})

interface Props {
  children: ReactNode
}

export const DataProvider = ({ children }: Props) => {
  const [CartContext, setCartContext] = useState<Map<String, PurchaseData>>(new Map())

  return <DataContext.Provider value={{ CartContext, setCartContext }}>{children}</DataContext.Provider>
}