export type CartProduct = {
    id: string
    title: string
    quantity: Number
    price: Number
    stock: Number
}

export type CartProductContextType = {
    cartContext: Map<string, CartProduct>;
    setCartContext: (value: Map<string, CartProduct>) => void;
}

export { }