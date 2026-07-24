export default function HeroSectionContent() {
    return (
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6">
            <div className="max-w-xl">
                <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6 leading-[1.1]">
                    {'Pure Science.'}
                    <br />
                    <span className="text-emerald-600">{'Natural Vitality.'}</span>
                </h1>
                <p className="text-lg md:text-xl text-slate-600 mb-8 leading-relaxed">{'Experience the next generation of bioavailability. Our supplements are clinically dosed and ethically sourced to fuel your highest performance.'}</p>
                <div className="flex flex-wrap gap-4">
                    <button type="button" className="bg-emerald-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-emerald-700 transition-all duration-200 shadow-lg shadow-emerald-200">{'Shop Bestsellers'}</button>
                    <button type="button" className="bg-white text-slate-900 px-8 py-4 rounded-lg font-semibold hover:bg-slate-50 transition-all duration-200 border border-slate-200">{'Our Science'}</button>
                </div>
            </div>
        </div>
    );
}