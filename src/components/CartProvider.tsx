"use client";

import products, { type Product } from "@/products";
import { createContext, useContext, useReducer } from "react";

export const FREE_SHIPPING_THRESHOLD = 100;

export type CartLine = {
    product: Product;
    quantity: number;
};

type CartState = {
    isOpen: boolean;
    items: CartLine[];
};

type CartAction =
    | { type: "open" }
    | { type: "close" }
    | { type: "changeQuantity"; productId: number; delta: number };

type CartContextValue = {
    isOpen: boolean;
    items: CartLine[];
    subtotal: number;
    open: () => void;
    close: () => void;
    changeQuantity: (productId: number, delta: number) => void;
};

const initialState: CartState = {
    isOpen: false,
    items: products.slice(0, 2).map((product) => ({ product, quantity: 1 })),
};

function cartReducer(state: CartState, action: CartAction): CartState {
    switch (action.type) {
        case "open":
            return { ...state, isOpen: true };
        case "close":
            return { ...state, isOpen: false };
        case "changeQuantity":
            return {
                ...state,
                items: state.items.map((item) =>
                    item.product.id === action.productId
                        ? { ...item, quantity: Math.max(1, item.quantity + action.delta) }
                        : item,
                ),
            };
    }
}

const CartContext = createContext<CartContextValue | null>(null);

export default function CartProvider({ children }: {
    children: React.ReactNode;
}) {
    const [state, dispatch] = useReducer(cartReducer, initialState);

    const subtotal = state.items.reduce(
        (sum, item) => sum + item.product.price * item.quantity,
        0,
    );

    const value: CartContextValue = {
        isOpen: state.isOpen,
        items: state.items,
        subtotal,
        open: () => dispatch({ type: "open" }),
        close: () => dispatch({ type: "close" }),
        changeQuantity: (productId, delta) => dispatch({ type: "changeQuantity", productId, delta }),
    };

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error("useCart must be used within a CartProvider");
    }
    return context;
}
