"use client";

import { changeQuantity } from "@/lib/cart";
import { formatPrice } from "@/lib/format";
import { type Product } from "@/products";
import { Minus, Plus, Trash } from "lucide-react";
import Image from "next/image";

export default function CartItem({ product }: {
    product: Product;
}) {
    return (
        <div className="flex gap-4 group" data-price={product.price}>
            <div className="w-20 h-20 bg-slate-50 rounded-xl overflow-hidden shrink-0 border border-slate-100">
                <Image alt={product.name} className="w-full h-full object-cover" src={product.image} />
            </div>
            <div className="flex-1 flex flex-col justify-between">
                <div className="flex justify-between items-start">
                    <div>
                        <h4 className="text-sm font-bold text-slate-800">{product.name}</h4>
                        <p className="text-xs text-slate-500">{product.description}</p>
                    </div>
                    <span className="text-sm font-bold text-emerald-600">{formatPrice(product.price)}</span>
                </div>
                <div className="flex justify-between items-center mt-2">
                    <div className="flex items-center bg-slate-100 rounded-lg p-1">
                        <button
                            type="button"
                            aria-label="Decrease quantity"
                            onClick={(e) => changeQuantity(e.currentTarget, -1)}
                            className="w-6 h-6 flex items-center justify-center text-slate-600 hover:text-emerald-600 transition-colors">
                            <Minus size={16} />
                        </button>
                        <span className="text-sm font-bold w-6 text-center qty-value">1</span>
                        <button
                            type="button"
                            aria-label="Increase quantity"
                            onClick={(e) => changeQuantity(e.currentTarget, 1)}
                            className="w-6 h-6 flex items-center justify-center text-slate-600 hover:text-emerald-600 transition-colors">
                            <Plus size={16} />
                        </button>
                    </div>
                    <button className="text-slate-400 hover:text-red-500 transition-colors">
                        <Trash size={16} />
                    </button>
                </div>
            </div>
        </div>
    );
}
