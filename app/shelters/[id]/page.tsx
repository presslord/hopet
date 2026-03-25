import { notFound } from "next/navigation";
import ShelterProfileHero from "@/components/shelters/ShelterProfileHero";
import { shelters } from "@/data/shelters";
import { pets } from "@/data/pets";
import ShelterStats from "@/components/shelters/ShelterStats";
import ShelterContactCard from "@/components/shelters/ShelterContactCard";
import ShelterPetsSection from "@/components/shelters/ShelterPetsSection";

interface ShelterPageProps {
    params: Promise<{
        id:string;
    }>;
}

export default async function ShelterPage({ params }: ShelterPageProps) {
    const { id } = await params;
    const shelter = shelters.find((item) => item.id === id);
    if (!shelter) {
        notFound();
    }
    const shelterPets = pets.filter((pet) => pet.shelterId === shelter.id);

    return (
        <div className="space-y-8 sm:space-y-10">
            <section className="overflow-hidden rounded-xl bg-white shadow-xl">
            <ShelterProfileHero shelter={ shelter }></ShelterProfileHero>
            <div className="space-y-8 px-5 pb-18 sm:px-8 sm:pb-8 sm:pt-24 py-16">
                <div className="space-y-4 text-center">
                    <h1 className="text-3xl font-semibold text-gray-900 sm:text-4xl">{shelter.name}</h1>
                    <p className="mx-auto max-w-3xl text-sm leading-7 text-gray-600 sm:text-base">{shelter.description}</p>
                </div>        
                <div className="grid gap-4 lg:grid-cols-[1.6fr_1fr]">
                    <ShelterStats founded={shelter.founded} volunteers={shelter.volunteers} petsCount={shelterPets.length} />
                    <ShelterContactCard shelter={shelter} />
                </div>
            </div>
        </section>
        <ShelterPetsSection shelterName={shelter.name} pets={shelterPets}></ShelterPetsSection>  
        </div>
    );
}