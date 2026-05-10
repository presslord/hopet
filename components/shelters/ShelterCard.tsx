import Image from "next/image";
import Link from "next/link";
import { Shelter } from "@/data/shelters";

interface ShelterCardProps {
    shelter : Shelter;
}

export default function ShelterCard( { shelter }: ShelterCardProps) {
    return (
        <Link href={`/shelters/${shelter.id}`} className="group overflow-hidden rounded-xl bg-white shadow-lg transition-transform duration-200 hover:-translate-y-1">
            <div className="relative h-56 overflow-hidden">
                <Image src={shelter.coverImage} alt={shelter.name} fill sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                 className="object-center object-cover transition duration-300 group-hover:scale-105" />
                 <div className="absolute inset-0 bg-gradient-to-t from-[#180803] via-[#180803]/0 to-transparent" />
                 <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between gap-3">
                    <div>
                        <p className="text-sm text-white/75">{shelter.city}</p>
                        <h2 className="text-2xl font-semibold text-white">{shelter.name}</h2>
                    </div>
                    <div className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs text-white backdrop-blur-2xl">с {shelter.founded}г.</div>
                 </div>
            </div>
            <div className="space-y-5 p-5">
                <p className="text-sm leading-6 text-gray-600">{shelter.shortDescription}</p>

                <span className="inline-flex items-center text-sm font-medium rounded-full px-5 py-2.5 border border-[#d86542]/20 bg-[#d86542]/10 text-[#d86542] hover:bg-[#d86542] hover:text-white">Перейти в приют</span>
            </div>
        </Link>
    )
}