export interface PetMedia {
    id: number;
    pet_id: number;
    url: string;
    sort_order: string;
    created_at: string;
}


export const petMedia: PetMedia[] = [
    {
        id: 1,
        pet_id: 1,
        url: "/cat.mp4",
        sort_order: "0",
        created_at: " "
    },
    {
        id: 2,
        pet_id: 3,
        url: "/images/pets/snezhok-1.jpg",
        sort_order: " ",
        created_at: " "
    },
    {
        id: 3,
        pet_id: 2,
        url: "/images/pets/barsik-1.jpg",
        sort_order: " ",
        created_at: " "
    }
]