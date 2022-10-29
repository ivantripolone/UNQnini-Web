import React from 'react'
import { createContext, ReactNode, useState } from 'react'

export type SessionContextType = {
  logueado: boolean
  setLogueado: React.Dispatch<React.SetStateAction<boolean>>
}

export const SessionContext = createContext<SessionContextType>({} as SessionContextType)

interface SessionProviderProps {
  children: ReactNode
}

export const ProductsProvider = ({ children }: SessionProviderProps) => {
  const [logueado, setLogueado] = useState(false)

  return <SessionContext.Provider value={{ logueado, setLogueado }}>{children}</SessionContext.Provider>
}
