import { Pet } from "@/data/pets";
import Image from "next/image";
import Link from "next/link";
import { Shelter } from "@/data/shelters";

interface PetInfoBlockProps {
    pet : Pet;
    shelter?: Shelter;
}

export default function PetInfoBlock({ pet, shelter }: PetInfoBlockProps) {
    return (
    <div className="bg-white rounded-lg shadow-lg md-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
            <div className="aspect-square w-full overflow-hidden rounded-lg bg-gray-200">
                {pet.media.type === "video" ? (
                <video className="h-full w-full object-center object-cover" autoPlay muted loop playsInline>
                    <source src={pet.media.src} type ="video/mp4" />
                    </video>
                ) : (
                    <img 
                    src={pet.media.src}
                    alt={pet.media.alt}
                    className="h-full w-full object-center object-cover"></img>
                )}

            </div>
            <div className="flex flex-col justify-start p-4 md:p-6 text-4xl">
                <h1 className="text-gray-900 md-3 md:mb-4">{pet.name}</h1>
                <p className="text-3xl text-gray-700 md-3 md:mb-4">
                    {pet.type === "cat" ? "Кошка" : "Собака"}, {pet.age} год(а)
                </p>
                <div className="text-sm md:text-base text-gray-700 text-justify">
                    <p>{pet.description}</p>
                </div>
                {shelter && (
                <div className="mt-5 rounded-2xl bg-gray-50 p-4 md:mt-auto md:pt-6 md:p-5">
                    <div className="flex items-center gap-4">
                        <div className="relative h-16 w-16 overflow-hidden rounded-[50%] bg-gray-100 shadow-2xl">
                            <Image src={shelter.avatarImage} alt={"Shelter avatar"} fill sizes="64px" className="object-cover" />
                        </div>
                        <div>
                            <p className="text-sm font-medium text-gray-500">Приют</p>
                            <h2 className="text-xl font-bold text-gray-900">{shelter.name}</h2>
                            <p className="mt-1 text-sm text-gray-60">{shelter.city} | {shelter.workingHours}</p>
                        </div>
                    </div>
                    <div className="mt-4 flex flex-col gap-3 sm:flex-row">
                        <Link href={`/shelters/${shelter.id}`} className="inline-flex items-center justify-center rounded-full border border-gray-200 bg-white px-5 py-3 text-sm font-medium text-gray-900 transition hover:bg-gray-100">Перейти в приют</Link>
                        <button className="inline-flex items-center justify-center rounded-full border border-gray-200 bg-gray-900 px-5 py-3 text-sm font-medium text-white transition hover:bg-gray-700">Забрать животное</button>
                    </div>
                </div>
            )}
            </div>
        </div>
    </div>
    );
}