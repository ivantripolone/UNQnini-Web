import React from 'react'
import { createContext, ReactNode, useState } from 'react'
import { Product } from '../types/product'

export const ProductsContext = createContext<ProductsContextType>({} as ProductsContextType)

interface ProductsProviderProps {
  children: ReactNode
}

export const ProductsProvider = ({ children }: ProductsProviderProps) => {
  const [products, setProducts] = useState<Product[]>([])
  const [allProducts, setAllProducts] = useState<Product[]>([])
  
  return (
    <ProductsContext.Provider value={{ products, setProducts, allProducts, setAllProducts}}>
      {children}
    </ProductsContext.Provider>
  )
}

export type ProductsContextType = {
  products: Product[]
  setProducts: React.Dispatch<React.SetStateAction<Product[]>>
  allProducts: Product[]
  setAllProducts: React.Dispatch<React.SetStateAction<Product[]>>
}
