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
        id: 1, name: "Снежок", type: "cat", media: { type: "video", src: "/cat.mp4", alt: "Кот Анатолий" },
        description: "",
        age: "2",
        vaccinated: true,
        litterTrained: false,
        health: "Огонь булочка ракета, не бит не крашен, перед продажей на мойке от...",
        sterilized: true,
        shelterId: "lyubov"
    },
        {
        id: 11, name: "Юта", type: "dog", media: { type: "image", src: "/dogs/dog3.jpg", alt: "Собак Бибер" },
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
        shelterId: "lyubov"
    },
    {
        id: 3, name: "Зорро", type: "cat", media: { type: "image", src: "/cats/cat3.jpeg", alt: "Кот Евпатий" },
        description: "",
        age: "",
        vaccinated: false,
        litterTrained: false,
        health: "",
        sterilized: false,
        shelterId: "lyubov"
    },
        {
        id: 10, name: "Шерлок", type: "dog", media: { type: "image", src: "/dogs/dog2.jpg", alt: "Собак Долик" },
        description: "",
        age: "",
        vaccinated: false,
        litterTrained: false,
        health: "",
        sterilized: false,
        shelterId: "nadezhda"
    },

    {
        id: 5, name: "Рыбка", type: "cat", media: { type: "image", src: "/cats/cat5.jpg", alt: "Кот Эщкерешка" },
        description: "",
        age: "",
        vaccinated: false,
        litterTrained: false,
        health: "",
        sterilized: false,
        shelterId: "lyubov"
    },
    {
        id: 6, name: "Кузя", type: "cat", media: { type: "image", src: "/cats/cat6.jpg", alt: "Кот Котэо" },
        description: "",
        age: "",
        vaccinated: false,
        litterTrained: false,
        health: "",
        sterilized: false,
        shelterId: "lyubov"
    },
        {
        id: 15, name: "Пабло", type: "dog", media: { type: "image", src: "/dogs/dog7.webp", alt: "Собак Саламули" },
        description: "",
        age: "",
        vaccinated: false,
        litterTrained: false,
        health: "",
        sterilized: false,
        shelterId: "nadezhda"
    },
    {
        id: 9, name: "Пончо", type: "dog", media: { type: "image", src: "/dogs/dog1.jpeg", alt: "Собак Егор" },
        description: "",
        age: "",
        vaccinated: false,
        litterTrained: false,
        health: "",
        sterilized: false,
        shelterId: "nadezhda"
    },
    {
        id: 4, name: "Муся", type: "cat", media: { type: "image", src: "/cats/cat4.jpg", alt: "Кот Бобик" },
        description: "",
        age: "",
        vaccinated: false,
        litterTrained: false,
        health: "",
        sterilized: false,
        shelterId: "lyubov"
    },
        {
        id: 2, name: "Мия", type: "cat", media: { type: "image", src: "/cats/cat2.jpg", alt: "Кот Киррилл" },
        description: "Он молодец",
        age: "",
        vaccinated: false,
        litterTrained: false,
        health: "",
        sterilized: false,
        shelterId: "lyubov"
    },
    {
        id: 12, name: "Варька", type: "dog", media: { type: "image", src: "/dogs/dog4.jpeg", alt: "Собак Варька" },
        description: "",
        age: "",
        vaccinated: false,
        litterTrained: false,
        health: "",
        sterilized: false,
        shelterId: "nadezhda"
    },
    {
        id: 13, name: "Граф", type: "dog", media: { type: "image", src: "/dogs/dog5.jpeg", alt: "Собак Кеша" },
        description: "",
        age: "",
        vaccinated: false,
        litterTrained: false,
        health: "",
        sterilized: false,
        shelterId: "nadezhda"
    },
    {
        id: 14, name: "Честер", type: "dog", media: { type: "image", src: "/dogs/dog6.jpg", alt: "Собак Буся" },
        description: "",
        age: "",
        vaccinated: false,
        litterTrained: false,
        health: "",
        sterilized: false,
        shelterId: "nadezhda"
    },
    {
        id: 7, name: "Крекер", type: "cat", media: { type: "image", src: "/cats/cat7.jpg", alt: "Кот Рыбка" },
        description: "",
        age: "",
        vaccinated: false,
        litterTrained: false,
        health: "",
        sterilized: false,
        shelterId: "vera"
    },
    {
        id: 16, name: "Голди", type: "dog", media: { type: "image", src: "/dogs/dog8.webp", alt: "Собак Пхали-сували" },
        description: "",
        age: "",
        vaccinated: false,
        litterTrained: false,
        health: "",
        sterilized: false,
        shelterId: "vera"
    },

];