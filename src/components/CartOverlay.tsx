export default function CartOverlay({ children }: {
    children: React.ReactNode;
}) {
    return (
        <div className="fixed inset-0 z-50 transition-opacity duration-300 bg-slate-900/40 backdrop-blur-sm">
            <div className="fixed top-0 right-0 size-full max-w-md bg-white shadow-2xl flex flex-col transition-transform duration-300 translate-x-0">
                {children}
            </div>
        </div>
    );
}