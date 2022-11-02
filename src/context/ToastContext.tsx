import React from 'react'
import { createContext, ReactNode, useState } from 'react'

export type ToastContextType = {
    message: string
    setMessage: React.Dispatch<React.SetStateAction<string>>
}

export const ToastContext = createContext<ToastContextType>({} as ToastContextType)

interface ToastProviderProps {
    children: ReactNode
}

export const ProductsProvider = ({ children }: ToastProviderProps) => {
    const [message, setMessage] = useState('')

    return (
        <ToastContext.Provider value={{ message, setMessage }}>
            {children}
        </ToastContext.Provider>
    )
}