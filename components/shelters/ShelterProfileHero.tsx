import Image from "next/image";
import { Shelter } from "@/data/shelters";

interface ShelterProfileHeroProps {
    shelter: Shelter;
}

export default function ShelterProfileHero({ shelter }: ShelterProfileHeroProps) {
    return (
        <div className="relative h-64 sm:h-80 lg:h-96">
            <Image src={shelter.coverImage} alt={`Обложка приюта ${shelter.name}`} fill priority sizes="100vw" className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#180803]/75 via-[#180803]/25 to-transparent" />
            <span className="absolute bottom-16 sm:bottom-5 ml-[-90] sm:left-0 left-1/2 sm:ml-5 border border-white/20 bg-white/10 px-3 py-1 text-sm text-white backdrop-blur rounded-full">{shelter.city}</span>
            <div className="absolute left-1/2 top-full z-10 h-28 w-28 -translate-y-1/2 -translate-x-1/2 overflow-hidden rounded-full border-4 border-white bg-white shadow-2xl sm:h-36 sm:w-36">
            <Image src={shelter.avatarImage} alt={`Аватар приюта ${shelter.name}`} fill sizes="144px" className="object-cover object-center"></Image>
            </div>
        </div>
        )
}