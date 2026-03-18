"use client";

import PetDetails from "@/components/PetDetails";
import { useParams } from "next/navigation";
import Link from "next/link";
import { pets } from "@/data/pets";
import PetInfoBlock from "@/components/PetInfoBlock";

export default function PetPage() {
    const params = useParams();
    const petId = Number(params.id);
    const pet = pets.find((p) => p.id === petId);

    if (!pet) {
        return (
            <div className="max-w-360 mx-auto px-6 py-12">
                <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                    <h1 className="text-2xl font-bold text-gray-900 mb-4">
                        Питомец не найден
                    </h1>
                    <Link href="/" className="bg-gray-800 text-white px-6 py-3 rounded-lg" >
                        Вернуться на главную
                    </Link>
                </div>
            </div>
        );
    }
    return (
        <div className="max-w-360 mx-auto">
            <PetInfoBlock pet={pet} />
            <PetDetails pet={pet} />
        </div>
    )
}