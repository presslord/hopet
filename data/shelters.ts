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
        adress: "Ул. Пушкина д.колотушкина",
        phone: "+7-910-600-30-20",
        email: "s260441@novsu.ru",
        workingHours: "09:00-21:00",
        coverImage: "/cats/cat1.jpg",
        avatarImage: "/cats/cat2.jpg",
        shortDescription: "Эщкере Эщкере Эщкере Эщкере Эщкере",
        description: "Эщкере Эщкере Эщкере Эщкере Эщкере Эщкере Эщкере Эщкере Эщкере Эщкере Эщкере Эщкере Эщкере Эщкере Эщкере Эщкере Эщкере Эщкере Эщкере Эщкере ",
        founded: "1892 год до н.э",
        volunteers: 3,
    },
    {
        id: "lyubov",
        name: "Любовь",
        city: "Великий Новгород",
        adress: "Ул. Кринжик д.1",
        phone: "+7-910-600-30-20",
        email: "s260441@novsu.ru",
        workingHours: "09:00-21:00",
        coverImage: "/cats/cat3.jpg",
        avatarImage: "/cats/cat4.jpg",
        shortDescription: "Эщкере Эщкере Эщкере Эщкере Эщкере",
        description: "Эщкере Эщкере Эщкере Эщкере Эщкере Эщкере Эщкере Эщкере Эщкере Эщкере Эщкере Эщкере Эщкере Эщкере Эщкере Эщкере Эщкере Эщкере Эщкере Эщкере ",
        founded: "1892 год до н.э",
        volunteers: 3,
    },

    {
        id: "vera",
        name: "Вера",
        city: "Великий Новгород",
        adress: "Ул. еперный театр д.2",
        phone: "+7-910-600-30-20",
        email: "s260441@novsu.ru",
        workingHours: "09:00-21:00",
        coverImage: "/cats/cat4.jpg",
        avatarImage: "/cats/cat5.jpg",
        shortDescription: "Эщкере Эщкере Эщкере Эщкере Эщкере",
        description: "Эщкере Эщкере Эщкере Эщкере Эщкере Эщкере Эщкере Эщкере Эщкере Эщкере Эщкере Эщкере Эщкере Эщкере Эщкере Эщкере Эщкере Эщкере Эщкере Эщкере ",
        founded: "1892 год до н.э",
        volunteers: 3,
    }
]