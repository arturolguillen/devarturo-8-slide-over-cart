import products from "@/products";
import CartItem from "./CartItem";

export default function CartItemList() {
    return (
        <div className="flex-1 overflow-y-auto cursor-scrollbar p-6 space-y-6">
            {products.slice(0, 2).map((product) => (
                <CartItem key={product.id} product={product} />
            ))}
        </div>
    );
}