"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { House, PawPrint, Building2, User } from "lucide-react";

const items = [
    { href: "/", label: "Главная", icon: House },
    { href: "/pets", label: "Животные", icon: PawPrint },
    { href: "/shelters", label: "Приюты", icon: Building2 },
    { href: "/profile", label: "Профиль", icon: User }
];

export default function MobileBottomNav() {
    const pathname = usePathname();

    const isActive = ( href: string) => {
        if (href=== "/") return pathname === "/";
        return pathname.startsWith(href);
    };

    return (
        <nav className="fixed inset-x-0 bottom-0 z-50 px-4 pb-4 pt-2 sm:hidden">
            <div className="mx-auto flex max-w-md items-center justify-between rounded-2xl border border-white/60 bg-white/80 px-2 py-2 shadow-[0_12px_40px_rgba(15,23,42,0.16)] backdrop-blur-2xl">
                {items.map(({href, label, icon: Icon}) => {
                    const active = isActive(href);

                    return (
                        <Link key={href} href={href} className={`flex min-w-[72px] flex-1 flex-col items-center justify-center 
                            rounded-lg px-3 py-2 text-[11px] font-medium transiotion ${active ? "bg-neutral-900 text-white shadow-[0_8px_24px_rgba(0,0,0,0.18)]" : "text-neutral-900"}`}>
                                <Icon className={`mb-1 h-5 w-5 ${active ? "scale-100" : "scale-95"}`} />
                                <span>{label}</span>
                            </Link>
                    );
                })}
            </div>
        </nav>
    )
}