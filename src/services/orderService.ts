import { OrderCash, OrderCard, OrderCreditCard } from '../types/order'
import genericService from './genericService'

const service = genericService('/order')

const orderService = {
  postOrderCash: (data: OrderCash) => service.post<string>('/cash', data),
  postOrderDebitCard: (data: OrderCard) => service.post<string>('/debitCard', data),
  postOrderCreditCard: (data: OrderCreditCard) => service.post<string>('/creditCard', data)
}

export default orderService