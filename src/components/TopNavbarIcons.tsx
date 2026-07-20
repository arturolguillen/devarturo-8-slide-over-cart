import { ShoppingCart, User } from "lucide-react";

export default function TopNavbarIcons() {
    return (
        <div className="flex items-center gap-2 md:gap-4">
            <button type="button" className="p-2 hover:bg-slate-100 transition-all duration-200 rounded-full text-emerald-700">
                <ShoppingCart />
            </button>
            <button type="button" className="p-2 hover:bg-slate-100 transition-all duration-200 rounded-full text-emerald-700">
                <User />
            </button>
        </div>
    );
}