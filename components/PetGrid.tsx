import PetCard from "./PetCard";
import { Pet } from "@/data/pets";

interface PetGridProps {
    pets: Pet[];
}

export default function PetGrid({ pets }: PetGridProps) {
    return (
        <div className="mx-auto w-full">
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4 xl:gap-8">
                {pets.map((pet) => (
                <PetCard key={pet.id} pet={pet} />
                ))}
            </div>
        </div>
    )
}