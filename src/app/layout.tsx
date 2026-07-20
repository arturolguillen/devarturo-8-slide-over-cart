import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({
    variable: "--font-inter",
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
});

const outfit = Outfit({
    variable: "--font-outfit",
    subsets: ["latin"],
    weight: ["600", "700", "800"],
});

export const metadata: Metadata = {
    title: "Devarturo - Vitality Lab",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html
            lang="en"
            className={`${inter.variable} ${outfit.variable} antialiased`}
        >
            <body className="min-h-dvh flex flex-col font-sans bg-slate-50 text-slate-900 overflow-x-hidden cart-open">
                {children}
            </body>
        </html>
    );
}
