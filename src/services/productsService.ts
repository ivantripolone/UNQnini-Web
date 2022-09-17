import { Product } from '../types/product'
import genericService from './genericService'

const productService = genericService('/products')

const getProducts = () => productService.get<Product[]>('/')

export default {
  getProducts,
}
