export type CartProduct = {
    id: string
    title: string
    quantity: Number
    subtotal: Number
}

export type CartProductContextType = {
    cartContext: Map<string, CartProduct>;
    setCartContext: (value: Map<string, CartProduct>) => void;
};