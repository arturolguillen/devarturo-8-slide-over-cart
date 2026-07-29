import { X } from "lucide-react";

export default function CartOverlayHeader() {
    return (
        <header className="p-6 border-b border-slate-100 flex items-center justify-between">
            <div className="space-y-1">
                <h2 className="text-2xl font-bold text-slate-800">{'Your Cart'}</h2>
                <p className="text-xs text-slate-500 font-medium uppercase tracking-wider">{'Health is wealth'}</p>
            </div>
            <button type="button" className="p-2 hover:bg-slate-100 rounded-full transition-colors">
                <X />
            </button>
        </header>
    );
}