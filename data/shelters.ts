export interface Shelter {
    id: string;
    name: string;
    city: string;
    adress: string;
    phone: string;
    email: string;
    workingHours: string;
    coverImage: string;
    avatarImage: string;
    shortDescription: string;
    description: string;
    founded: string;
    volunteers: number;
}

export const shelters: Shelter[] = [
    {
        id: "nadezhda",
        name: "Надежда",
        city: "Великий Новгород",
        adress: "Ул.Большая д.3",
        phone: "+7-910-600-30-20",
        email: "s260441@novsu.ru",
        workingHours: "Пн-Пт 09:00-21:00",
        coverImage: "/cats/cat1.jpg",
        avatarImage: "/cats/cat2.jpg",
        shortDescription: "Городской приют для кошек и собак",
        description: "Ориентирован на животных, попавших в тяжелые жизненные условия. В приюте оказывают помощь бездомным животным и помогают каждому найти хозяина.",
        founded: "1892",
        volunteers: 3,
    },
    {
        id: "lyubov",
        name: "Любовь",
        city: "Великий Новгород",
        adress: "Ул.Малая д.1А",
        phone: "+7-910-600-30-20",
        email: "s260441@novsu.ru",
        workingHours: "Пн-Пт 09:00-21:00",
        coverImage: "/cats/cat3.jpg",
        avatarImage: "/cats/cat4.jpg",
        shortDescription: "Городской приют для кошек и собак",
        description: "Ориентирован на животных, попавших в тяжелые жизненные условия. В приюте оказывают помощь бездомным животным и помогают каждому найти хозяина.",
        founded: "1999",
        volunteers: 3,
    },

    {
        id: "vera",
        name: "Вера",
        city: "Великий Новгород",
        adress: "Ул.Генералов 14",
        phone: "+7-910-600-30-20",
        email: "s260441@novsu.ru",
        workingHours: "Ежедневно 09:00-21:00",
        coverImage: "/cats/cat4.jpg",
        avatarImage: "/cats/cat5.jpg",
        shortDescription: "Городской приют для кошек и собак",
        description: "Ориентирован на животных, попавших в тяжелые жизненные условия. В приюте оказывают помощь бездомным животным и помогают каждому найти хозяина.",
        founded: "2025",
        volunteers: 3,
    }
]