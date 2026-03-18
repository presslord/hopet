import { Pet } from "@/data/pets";

interface PetInfoBockProps {
    pet : Pet;
}

export default function PetInfoBlock({ pet }: PetInfoBockProps) {
    return (
    <div className="bg-white rounded-lg shadow-lg md-6 custom-font">
        <div className="grid grid-cols-2 md:grid-cols-2 gap-4 md:gap-6">
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
            </div>
        </div>
    </div>
    );
}