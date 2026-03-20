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
                 <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/70 to-transparent" />
                 <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between gap-3">
                    <div>
                        <p className="text-sm text-white/75">{shelter.city}</p>
                        <h2 className="text-2xl font-semibold text-white">{shelter.name}</h2>
                    </div>
                    <div className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs text-white backdrop-blur-2xl">с {shelter.founded}</div>
                 </div>
            </div>
            <div className="space-y-5 p-5">
                <p className="text-sm leading-6 text-gray-600">{shelter.shortDescription}</p>
                <div className="flex flex-wrap gap-2 text-sm text-gray-500">
                    <span className="rounded-full bg-amber-50 px-3 py-1 text-amber-700">
                        {shelter.volunteers} волонтеров
                    </span>
                    <span className="rounded-full bg-gray-100 px-3 py-1">{shelter.workingHours}</span>
                </div>
                <span className="inline-flex items-center text-sm font-medium text-gray-900">Перейти в приют</span>
            </div>
        </Link>
    )
}