import { Shelter } from "./shelters";

export interface Pet {
    id: number;
    shelterId: string;
    name: string;
    type: "cat" | "dog";
    media: { type: "image" | "video"; src: string; alt: string};
    description: string; // История животного
    age: string; // Возраст
    vaccinated: boolean; // Привит?
    litterTrained: boolean; // Лоток
    health: string; // Инфо о здоровье
    sterilized: boolean; // яйцен клац-клац
    
}

export const pets: Pet[] = [
    {
        id: 1, name: "Анатолий", type: "cat", media: { type: "image", src: "/cats/cat1.jpg", alt: "Кот Анатолий" },
        description: "Он молодец Огонь булочка ракета, не бит не крашен, перед продажей на мойке от...Огонь булочка ракета, не бит не крашен, перед продажей на мойке от...Огонь булочка ракета, не бит не крашен, перед продажей на мойке от...мОгонь булочка ракета, не бит не крашен, перед продажей на мойке от...",
        age: "2",
        vaccinated: true,
        litterTrained: false,
        health: "Огонь булочка ракета, не бит не крашен, перед продажей на мойке от...",
        sterilized: true,
        shelterId: "nadezhda"
    },
    {
        id: 2, name: "Киррилл", type: "cat", media: { type: "image", src: "/cats/cat2.jpg", alt: "Кот Киррилл" },
        description: "Он молодец",
        age: "",
        vaccinated: false,
        litterTrained: false,
        health: "",
        sterilized: false,
        shelterId: "nadezhda"
    },
    {
        id: 3, name: "Евпатий", type: "cat", media: { type: "image", src: "/cats/cat3.jpg", alt: "Кот Евпатий" },
        description: "",
        age: "",
        vaccinated: false,
        litterTrained: false,
        health: "",
        sterilized: false,
        shelterId: "nadezhda"
    },
    {
        id: 4, name: "Бобик", type: "cat", media: { type: "image", src: "/cats/cat4.jpg", alt: "Кот Бобик" },
        description: "",
        age: "",
        vaccinated: false,
        litterTrained: false,
        health: "",
        sterilized: false,
        shelterId: "nadezhda"
    },
    {
        id: 5, name: "Эщкерешка", type: "cat", media: { type: "image", src: "/cats/cat5.jpg", alt: "Кот Эщкерешка" },
        description: "",
        age: "",
        vaccinated: false,
        litterTrained: false,
        health: "",
        sterilized: false,
        shelterId: "nadezhda"
    },
    {
        id: 6, name: "Котэо", type: "cat", media: { type: "image", src: "/cats/cat6.jpg", alt: "Кот Котэо" },
        description: "",
        age: "",
        vaccinated: false,
        litterTrained: false,
        health: "",
        sterilized: false,
        shelterId: "nadezhda"
    },
    {
        id: 7, name: "Рыбка", type: "cat", media: { type: "image", src: "/cats/cat7.jpg", alt: "Кот Рыбка" },
        description: "",
        age: "",
        vaccinated: false,
        litterTrained: false,
        health: "",
        sterilized: false,
        shelterId: "nadezhda"
    },
    {
        id: 8, name: "Скиттер", type: "cat", media: { type: "image", src: "/cats/cat8.jpg", alt: "Кот Скиттер" },
        description: "",
        age: "",
        vaccinated: false,
        litterTrained: false,
        health: "",
        sterilized: false,
        shelterId: "nadezhda"
    },
    {
        id: 9, name: "Егор", type: "dog", media: { type: "video", src: "/cat.mp4", alt: "Собак Егор" },
        description: "",
        age: "",
        vaccinated: false,
        litterTrained: false,
        health: "",
        sterilized: false,
        shelterId: "lyubov"
    },
    {
        id: 10, name: "Долик", type: "dog", media: { type: "image", src: "/cats/cat1.jpg", alt: "Собак Долик" },
        description: "",
        age: "",
        vaccinated: false,
        litterTrained: false,
        health: "",
        sterilized: false,
        shelterId: "lyubov"
    },
    {
        id: 11, name: "Бибер", type: "dog", media: { type: "image", src: "/cats/cat1.jpg", alt: "Собак Бибер" },
        description: "",
        age: "",
        vaccinated: false,
        litterTrained: false,
        health: "",
        sterilized: false,
        shelterId: "lyubov"
    },
    {
        id: 12, name: "Варька", type: "dog", media: { type: "image", src: "/cats/cat1.jpg", alt: "Собак Варька" },
        description: "",
        age: "",
        vaccinated: false,
        litterTrained: false,
        health: "",
        sterilized: false,
        shelterId: "lyubov"
    },
    {
        id: 13, name: "Кеша", type: "dog", media: { type: "image", src: "/cats/cat1.jpg", alt: "Собак Кеша" },
        description: "",
        age: "",
        vaccinated: false,
        litterTrained: false,
        health: "",
        sterilized: false,
        shelterId: "lyubov"
    },
    {
        id: 14, name: "Буся", type: "dog", media: { type: "image", src: "/cats/cat1.jpg", alt: "Собак Буся" },
        description: "",
        age: "",
        vaccinated: false,
        litterTrained: false,
        health: "",
        sterilized: false,
        shelterId: "lyubov"
    },
    {
        id: 15, name: "Саламули", type: "dog", media: { type: "image", src: "/cats/cat1.jpg", alt: "Собак Саламули" },
        description: "",
        age: "",
        vaccinated: false,
        litterTrained: false,
        health: "",
        sterilized: false,
        shelterId: "lyubov"
    },
    {
        id: 16, name: "Пхали-сували", type: "dog", media: { type: "image", src: "/cats/cat1.jpg", alt: "Собак Пхали-сували" },
        description: "",
        age: "",
        vaccinated: false,
        litterTrained: false,
        health: "",
        sterilized: false,
        shelterId: ""
    },

];