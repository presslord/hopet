import PetGrid from "../PetGrid";
import { Pet } from "@/data/pets";

interface ShelterPetsSectionProps { 
    shelterName : string;
    pets: Pet[];
}

export default function ShelterPetsSection({ shelterName,
     pets, 
    }:ShelterPetsSectionProps) {
    return (
        <section className="space-y-4">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
                <div>
                    <p className="text-sm uppercase tracking-[0.18em] text-gray-400">Питомцы приюта</p>
                    <h2 className="text-2xl font-semibold text-gray-900 sm:text-3xl">Кому можно помочь</h2>
                </div>
                <p className="max-w-xl text-sm leading-6 text-gray-600">На этой странице представленны животные приюта {shelterName}</p>
            </div>

            { pets.length > 0 ? (
                <PetGrid pets={pets} />
            ) : (
                <div className="rounded-xl bg-white p-8 text-center shadow-lg">
                    <h3 className="text-xl font-semibold text-gray-900">Питомцы этого приюта нашли свой дом</h3>
                    <p className="mt-3 text-sm leading-6 text-gray-600">Вы можете вернуться к списку приютов</p>
                </div>
            )}
        </section>
    );
}