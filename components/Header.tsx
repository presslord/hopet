import Link from "next/link"


export default function Header() {
    return (
    <header className="sticky top-0 z-50 mx-auto w-full max-w-7xl p-6 lg:px-8 mt-3 px-3 hidden sm:block sm:px-6">
        <div className="flex justify-between items-center rounded-xl bg-white/85 p-4 text-black shadow-lg backdrop:blur-xl sm:p-6">
            <a href="/" className="text-xl font-bold">HOPET</a>
            <nav>
            <ul className="flex flex-wrap items-center justify-end gap-x-4 gap-y-2 text-sm sm:text-base">
                <li><Link href="/" className="transition hover:text-black">Главная</Link></li>
                <li><Link href="/pets" className="transition hover:text-black">Животные</Link></li>
                <li><Link href="/shelters" className="transition hover:text-black">Приюты</Link></li>
                <li><Link href="/profile" className="transition hover:text-black">Профиль</Link></li>
            </ul>
            </nav>
        </div>
        </header>
    )
}