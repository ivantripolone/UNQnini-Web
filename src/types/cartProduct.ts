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
    setDiscount: React.Dispatch<React.SetStateAction<number>>;
    discount: number;
    total: number;
    setTotal: React.Dispatch<React.SetStateAction<number>>;
    getNameCoupon: string;
    setNameCoupon: React.Dispatch<React.SetStateAction<string>>;
    couponApplied: boolean;
    setCouponApplied: React.Dispatch<React.SetStateAction<boolean>>;
}

export type MessageErrorContextType = {
    getErrorMessagesForProducts: string;
    setErrorMessagesForProducts: (messages: string) => void;
}


export { }