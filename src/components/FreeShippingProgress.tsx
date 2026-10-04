"use client";

import { FREE_SHIPPING_THRESHOLD, useCart } from "@/components/CartProvider";
import { formatPrice } from "@/lib/format";
import { Truck } from "lucide-react";

export default function FreeShippingProgress() {
    const { subtotal } = useCart();
    const remaining = Math.max(0, FREE_SHIPPING_THRESHOLD - subtotal);
    const progress = Math.min(100, (subtotal / FREE_SHIPPING_THRESHOLD) * 100);
    const qualifies = remaining === 0;

    return (
        <div className="px-6 py-4 bg-emerald-50/50">
            <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-semibold text-emerald-800">
                    {qualifies ? (
                        'You get free shipping'
                    ) : (
                        <>
                            {'You\'re short '}
                            <span className="font-bold">{formatPrice(remaining)}</span>
                            {' of free shipping'}
                        </>
                    )}
                </span>
                <span className="text-emerald-600">
                    <Truck />
                </span>
            </div>
            <div className="h-1.5 w-full bg-slate-200 rounded-full overflow-hidden">
                <div className="h-full bg-emerald-600 transition-all duration-700 ease-out" style={{
                    width: `${progress}%`,
                }}></div>
            </div>
        </div>
    );
}
