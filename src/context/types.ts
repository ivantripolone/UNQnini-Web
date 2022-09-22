export type PurchaseData = {
    quantitySelected: Number;
    totalToPay: Number;
};

export type PurchaseDataContextType = {
    CartContext: Map<string, PurchaseData>;
    setCartContext: (value: Map<string, PurchaseData>) => void;
};