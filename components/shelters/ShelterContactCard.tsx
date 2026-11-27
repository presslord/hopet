import Link from "next/link";
import { Shelter } from "@/data/shelters";

interface ShelterContactCardProps {
    shelter: Shelter;
}

export default function ShelterContactCard({ shelter }: ShelterContactCardProps) {
    return (
        <div className="rounded-xl bg-[#200f09] p-6 text-white shadow-lg">
            <p className="text-sm text-white/60">Контакты</p>
            <div className="mt-4 space-y-3 text-sm leading-6 text-white/85">
            <p className="">{ shelter.address}</p>
            <p className="">{ shelter.email}</p>
            <p className="">{ shelter.phone}</p>
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
                <Link href="/contact" className="rounded-full bg-white px-5 py-2.5 text-sm font-medium text-[#200f09] transition hover:bg-[#ffecce]">Написать приюту</Link>
                <Link href="/shelters" className="rounded-full border border-white/20 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-white/10">Все приюты</Link>
            </div>
        </div>
    );
}