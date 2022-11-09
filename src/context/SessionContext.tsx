import React from 'react'
import { createContext, ReactNode, useState } from 'react'

export type SessionContextType = {
  logueado: boolean
  setLogueado: React.Dispatch<React.SetStateAction<boolean>>
  username: string
  setUsername: React.Dispatch<React.SetStateAction<string>>
  showActionButtons: boolean
  setShowActionButtons: React.Dispatch<React.SetStateAction<boolean>>
}

export const SessionContext = createContext<SessionContextType>({} as SessionContextType)

interface SessionProviderProps {
  children: ReactNode
}

export const ProductsProvider = ({ children }: SessionProviderProps) => {
  const [logueado, setLogueado] = useState(false)
  const [username, setUsername] = useState('')
  const [showActionButtons, setShowActionButtons] = useState(true)

  return (
    <SessionContext.Provider value={{ logueado, setLogueado, username, setUsername, showActionButtons, setShowActionButtons }}>
      {children}
    </SessionContext.Provider>
  )
}
