"use client";

import {useState} from "react";

import HeroSection from "@/components/HeroSection";
import PetGrid from "@/components/PetGrid";
import FilterButtons, { Category } from "@/components/FilterButtons";
import {pets, Pet} from "@/data/pets";

export default function Page() {
  const [filteredPets, setFilteredPets] = useState<Pet[]>(pets);

  const handleFilterChange = (category: Category) => {
    const filtered = pets.filter((pet) => {
      if (category === "Все") return true;arguments
      if (category === "Кошки") return pet.type === "cat";
      if (category === "Собаки") return pet.type === "dog";
      return true;
    });
    setFilteredPets(filtered);
  };
  return (
    <div className="space-y-6 sm:space-y-8">
    <HeroSection></HeroSection>
    <FilterButtons onFilterChange={handleFilterChange}></FilterButtons>
    <PetGrid pets={filteredPets}></PetGrid>
    </div>
  )
}



