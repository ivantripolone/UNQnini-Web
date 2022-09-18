import { Product } from '../types/product'
import genericService from './genericService'

const productService = genericService('products')

const getProducts = () => productService.get<Product[]>('/')
const getProduct = (id: string) => productService.get<Product[]>(id)

export default {
  getProducts,
  getProduct,
}
