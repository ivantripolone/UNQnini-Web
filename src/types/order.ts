export interface Order {
    buyerName: string
    businessName: string
    cuit: string
    businessAddress: string
    isByHomeDelivery: boolean
    deliveryAddress: string
    products: { [k: string]: number }
}

export interface OrderCash extends Order {
    paysExactAmount: boolean
    payAmount: number
}

export interface OrderCard extends Order {
    payerName: String
    cardNumber: String
    cardExpirationDate: String
    cardSecurityCode: String
}

export interface OrderCreditCard extends OrderCard {
    amountOfPayments: string
}

export interface productOrder {
    id: string
    quantity: number
}

