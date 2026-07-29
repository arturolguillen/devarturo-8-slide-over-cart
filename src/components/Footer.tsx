import Link from "next/link";

export default function Footer() {
    const date = new Date;
    const links = ['Privacy Policy', 'Terms of Service', 'Contact'];

    return (
        <footer className="bg-white mt-12 border-t border-slate-100">
            <div className="flex flex-col md:flex-row justify-between items-center w-full max-w-7xl mx-auto px-6 py-8">
                <p className="text-sm text-slate-500 font-medium">&copy; {`${date.getFullYear()} Vitality Lab Supplements. All rights reserved.`}</p>
                <div className="flex gap-8 mt-4 md:mt-0">
                    {links.map(link => (
                        <Link
                            key={link}
                            href={'#'}
                            className="text-sm font-bold text-slate-600 hover:text-emerald-600 underline decoration-emerald-500/30 underline-offset-4 decoration-2"
                        >
                            {link}
                        </Link>
                    ))}
                </div>
            </div>
        </footer>
    );
}