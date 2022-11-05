export type PurchaseData = {
    id: string
    paymentType: string
    purchasesProducts: PurchaseProductData[]
    discount: number
    total: number
}

export type PurchaseProductData = {
    id: string
    name: string
    count: number
}