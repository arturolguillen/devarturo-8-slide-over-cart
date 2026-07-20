export default function HeroSection({ children }: {
    children: React.ReactNode;
}) {
    return (
        <section className="relative w-full h-[80vh] min-h-150 flex items-center overflow-hidden">
            {children}
        </section>
    );
}