import { Product } from '../types/product'
import genericService from './genericService'

const service = genericService('/products')

const productService = {
  getProducts: () => service.get<Product[]>('/'),
  getProduct: (id: string) => service.get<Product>(`/${id}`),

}

export default productService
