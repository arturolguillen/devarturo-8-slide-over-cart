"use client";

import { useEffect } from "react";
import { useCart } from "@/components/CartProvider";

export default function CartOverlay({ children }: {
    children: React.ReactNode;
}) {
    const { isOpen, close } = useCart();

    useEffect(() => {
        document.body.classList.toggle("cart-open", isOpen);
    }, [isOpen]);

    return (
        <div
            className={`fixed inset-0 z-50 transition-opacity duration-300 bg-slate-900/40 backdrop-blur-sm ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
            onClick={(e) => {
                if (e.target === e.currentTarget) close();
            }}
        >
            <div className={`fixed top-0 right-0 size-full max-w-md bg-white shadow-2xl flex flex-col transition-transform duration-300 ${isOpen ? "translate-x-0" : "translate-x-full"}`}>
                {children}
            </div>
        </div>
    );
}
