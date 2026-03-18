import Image from "next/image";
import { Shelter } from "@/data/shelters";

interface ShelterProfileHeroProps {
    shelter: Shelter;
}

export default function ShelterProfileHero({ shelter }: ShelterProfileHeroProps) {
    return (
        <div className="relative h-64 sm:h-80 lg:h-96">
            <Image src={shelter.coverImage} alt={`Обложка приюта ${shelter.name}`} fill priority sizes="100vw" className="object-cover" />
            <div className="absolute inset-0 bg-gradient bg-gradient-to-t from-black/75 via-black/25 to-transparent" />
            <div className="absolute left-1/2 top-full z-10 h-28 w-28 -translate-y-1/2 overflow-hidden rounded-full border-4 border-white shadow-2xl sm:h-36 sm:w-36">
            <Image src={shelter.avatarImage} alt={`Аватар приюта ${shelter.name}`} fill sizes="144px" className="object-cover object-center" />
            </div> 
            <div className="absolute bottom-20 left-1/2 z-20 -translate-x-1/2 sm:bottom-6 sm:right-8 sm:translate-x-0">
            <div className="inline-flex rounded-full border border-white/20 bg-white/10 px-3 py-1 text-white text-sm backdrop-blur">
            </div>
            <div></div>
            </div>
        </div>
    )
}