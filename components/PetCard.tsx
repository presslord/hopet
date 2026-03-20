export interface Pet {
    id: number;
    name: string;
    type: "cat" | "dog";
    media: { type: "image" | "video"; src: string; alt: string};
}

interface PetCardProps {
    pet: Pet;
}

export default function PetCard({ pet }: PetCardProps) {
    return (
        <a href={"/pets/" + pet.id} className="group relative cursor-pointer">
                <div className="flex h-full flex-col">
                <div className="aspect-square w-full overflow-hidden rounded-lg bg-gray-200 group-hover:opacity-75">
                    {pet.media.type === "video" ? (
                        <video className="h-full w-full object-cover object-center ..." autoPlay muted loop playsInline>
                            <source src={pet.media.src} type="video/mp4"></source>  
                        </video>
                    ) : (
                        <img src={pet.media.src} alt={pet.media.alt} className="h-full w-full object-cover object-center ..."></img>
                    )}
                </div>
                <h3 className="mt-4 min-h-7 text-lg text-gray-700 transition group-hover:text-gray-900">{pet.name}</h3>
        </div>
    </a>
    );           
}