import Link from "next/link";
import { Pet } from "@/data/pets";
import { shelters } from "@/data/shelters";

interface PetCardProps {
    pet: Pet;
}

export default function PetCard({ pet }: PetCardProps) {
    const shelter = shelters.find((item) => item.id === pet.shelterId);
    return (
        <Link href={`/pets/${pet.id}`} className="group block h-full">
            <div className="group relative cursor-pointer">
                    <div className="flex h-full flex-col">
                    <div className="relative aspect-square w-full overflow-hidden rounded-lg bg-gray-200">
                        {pet.media.type === "video" ? (
                            <video className="h-full w-full object-cover object-center ..." autoPlay muted loop playsInline>
                                <source src={pet.media.src} type="video/mp4"></source>  
                            </video>
                        ) : (
                            <img src={pet.media.src} alt={pet.media.alt} className="h-full w-full object-cover object-center ..."></img>
                            
                        )}
                        
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                        <div className="absolute bottom-4 left-4 right-4">
                        <p className="text-sm text-white/75">{shelter?.city ?? "Город не указан"}</p>
                        <h3 className="text-xl font-semibold text-white">{pet.name}</h3>
                        </div>
                    </div>
                    </div>
                </div>
    </Link>
    );           
}