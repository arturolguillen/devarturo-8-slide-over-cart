export default function MainContent({ children }: {
    children: React.ReactNode;
}) {
    return (
        <main className="transition-all duration-300 pt-16">
            {children}
        </main>
    );
}