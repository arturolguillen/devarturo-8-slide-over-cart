export default function ProductSection({ children }: {
    children: React.ReactNode;
}) {
    return (
        <section className="py-20 max-w-7xl mx-auto px-6">
            {children}
        </section>
    );
}