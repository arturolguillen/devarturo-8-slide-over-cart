import { type Product } from "@/products";
import { ShoppingCart } from "lucide-react";
import Image from "next/image";

export default function ProductCard({ product }: {
    product: Product
}) {
    return (
        <div className="bg-white p-5 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl transition-all duration-300 group cursor-pointer">
            <div className="aspect-square bg-slate-50 rounded-xl mb-4 overflow-hidden">
                <Image
                    src={product.image}
                    alt={product.name}
                    className="size-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
            </div>
            <h3 className="text-xl font-bold mb-1 text-slate-800">{product.name}</h3>
            <p className="text-slate-500 text-sm mb-4">{product.description}</p>
            <div className="flex justify-between items-center">
                <span className="text-xl font-bold text-emerald-600">{product.price}</span>
                <button type="button" className="bg-emerald-50 text-emerald-600 p-2.5 rounded-lg hover:bg-emerald-600 hover:text-white transition-colors">
                    <ShoppingCart />
                </button>
            </div>
        </div>
    );
}