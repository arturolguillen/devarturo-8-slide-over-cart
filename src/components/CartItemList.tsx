"use client";

import { useCart } from "@/components/CartProvider";
import CartItem from "./CartItem";

export default function CartItemList() {
    const { items } = useCart();

    return (
        <div className="flex-1 overflow-y-auto cursor-scrollbar p-6 space-y-6">
            {items.map(({ product, quantity }) => (
                <CartItem key={product.id} product={product} quantity={quantity} />
            ))}
        </div>
    );
}
