"use client";

import { useState } from "react";
import FilterButtons, { Category } from "@/components/FilterButtons";
import PetGrid from "@/components/PetGrid";
import { pets, Pet} from "@/data/pets"

export default function petsPage() {
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
    <div>
        <div>
            <h1>Животные</h1>
            <p>Найдите себе питомца</p>
        </div>
        <FilterButtons onFilterChange={handleFilterChange}></FilterButtons>
            <PetGrid pets={filteredPets}></PetGrid>
    </div>
  );
}