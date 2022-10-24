import { createContext, ReactNode, useState } from 'react'
import { CartProduct } from '../types/cartProduct'

export const DataContext = createContext({})

interface Props {
  children: ReactNode
}

export const DataProvider = ({ children }: Props) => {
  const [cartContext, setCartContext] = useState<Map<String, CartProduct>>(new Map())
  const [getErrorMessagesForProducts, setErrorMessagesForProducts] = useState('')
  const [discount, setDiscount] = useState<number>(0)
  const [total, setTotal] = useState<number>(0)
  const [getNameCoupon, setNameCoupon] = useState('')
  const [couponApplied, setCouponApplied] = useState(false)


  return <DataContext.Provider value={{ cartContext: cartContext, setCartContext, getErrorMessagesForProducts, 
    setErrorMessagesForProducts, discount, setDiscount, total, setTotal, getNameCoupon, setNameCoupon, couponApplied, setCouponApplied }}>{children}</DataContext.Provider>
}