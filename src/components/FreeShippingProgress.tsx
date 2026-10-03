import { Truck } from "lucide-react";

export default function FreeShippingProgress() {
    return (
        <div className="px-6 py-4 bg-emerald-50/50">
            <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-semibold text-emerald-800">
                    {'Te faltan '}
                    <span className="font-bold">$20.00</span>
                    {' para envío gratis'}
                </span>
                <span className="text-emerald-600">
                    <Truck />
                </span>
            </div>
            <div className="h-1.5 w-full bg-slate-200 rounded-full overflow-hidden">
                <div className="h-full bg-emerald-600 transition-all duration-700 ease-out" style={{
                    width: '80%',
                }}></div>
            </div>
        </div>
    );
}