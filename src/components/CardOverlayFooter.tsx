import { ArrowRight } from "lucide-react";

export default function CardOverlayFooter() {
    return (
        <div className="px-6 py-8 bg-slate-50 border-t border-slate-100">
            <div className="space-y-3 mb-6">
                <div className="flex justify-between text-slate-600 text-sm font-medium">
                    <span>Subtotal</span>
                    <span className="cart-subtotal">$80.00</span>
                </div>
                <div className="flex justify-between text-slate-600 text-sm font-medium">
                    <span>Envío</span>
                    <span className="text-emerald-600 font-bold">{'Calculado al checkout'}</span>
                </div>
                <div className="flex justify-between items-center pt-3 border-t border-slate-200">
                    <span className="text-lg font-bold text-slate-800">{'Total'}</span>
                    <span className="text-2xl font-bold text-emerald-600 cart-total">$80.00</span>
                </div>
            </div>
            <button
                className="w-full bg-emerald-600 text-white py-4 rounded-xl font-bold text-lg hover:bg-emerald-700 transition-all duration-300 shadow-xl shadow-emerald-100 flex items-center justify-center gap-2 group active:scale-[0.98]">
                {'Checkout Now'}
                <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </button>
            <p className="text-center text-[11px] font-medium text-slate-400 mt-4 uppercase tracking-widest">{'Secure encrypted payment processing.'}</p>
        </div>
    );
}