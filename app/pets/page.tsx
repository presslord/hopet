"use client";

import { useState } from "react";
import FilterButtons, { Category } from "@/components/FilterButtons";
import PetGrid from "@/components/PetGrid";
import { pets, Pet} from "@/data/pets"

export default function PetsPage() {
    const [filteredPets, setFilteredPets] = useState<Pet[]>(pets);
    const handleFilterChange = (category: Category) => {
    const filtered = pets.filter((pet) => {
      if (category === "Все") return true;
      if (category === "Кошки") return pet.species === "cat";
      if (category === "Собаки") return pet.species === "dog";
      return true;
    });
    setFilteredPets(filtered);
  };

  return (
    <div>
          <FilterButtons onFilterChange={handleFilterChange}></FilterButtons>
          <PetGrid pets={filteredPets}></PetGrid>
    </div>
  );
}
