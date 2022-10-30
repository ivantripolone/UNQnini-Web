import React from 'react'
import { createContext, ReactNode, useState } from 'react'

export type SessionContextType = {
  logueado: boolean
  setLogueado: React.Dispatch<React.SetStateAction<boolean>>
  username: string
  setUsername: React.Dispatch<React.SetStateAction<string>>
}

export const SessionContext = createContext<SessionContextType>({} as SessionContextType)

interface SessionProviderProps {
  children: ReactNode
}

export const ProductsProvider = ({ children }: SessionProviderProps) => {
  const [logueado, setLogueado] = useState(false)
  const [username, setUsername] = useState('')

  return (
    <SessionContext.Provider value={{ logueado, setLogueado, username, setUsername }}>
      {children}
    </SessionContext.Provider>
  )
}
