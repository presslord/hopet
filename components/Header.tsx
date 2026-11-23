import Link from "next/link"
import Image from "next/image"

export default function Header() {
    return (
    <header className="sticky top-0 z-50 mx-auto w-full max-w-7xl p-6 lg:px-8 mt-3 px-3 hidden sm:block sm:px-6">
        <div className="flex justify-between items-center rounded-xl bg-white/85 p-4 text-black backdrop-blur-xs shadow-lg sm:p-6">
            <Image className="absolute ms-[-30]" src="/logo.svg" width={80} height={20} alt={"logotip"}></Image>
            <Link href="/" className="ms-12 text-xl font-bold">Приючу!</Link>
            <nav>
            <ul className="flex flex-wrap items-center justify-end gap-x-4 gap-y-2 text-sm sm:text-base">
                <li><Link href="/" className="transition hover:text-black">Главная</Link></li>
                <li><Link href="/pets" className="transition hover:text-black">Животные</Link></li>
                <li><Link href="/shelters" className="transition hover:text-black">Приюты</Link></li>
                <li><Link href="/profile" className="transition hover:text-black">Профиль</Link></li>
                <li><Link href="/about" className="transition hover:text-black">О нас</Link></li>

            </ul>
            </nav>
        </div>
        </header>
    )
}
