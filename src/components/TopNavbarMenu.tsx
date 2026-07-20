import clsx from "clsx";
import Link from "next/link";

const menuItems = [
    {
        text: 'Shop All',
        active: true,
    },
    {
        text: 'Health Goals',
        active: false,
    },
    {
        text: 'Bundles',
        active: false,
    },
    {
        text: 'About',
        active: false,
    }
];

export default function TopNavbarMenu() {
    return (
        <nav className="hidden md:flex gap-8">
            {menuItems.map(item => (
                <Link
                    key={item.text}
                    href={'#'}
                    className={clsx({
                        'text-sm uppercase tracking-wide': true,
                        'text-emerald-700 font-bold border-b-2 border-emerald-700 pb-1': item.active,
                        'text-slate-600 hover:text-emerald-700 transition-colors font-semibold': !item.active,
                    })}
                >
                    {item.text}
                </Link>
            ))}
        </nav>
    );
}