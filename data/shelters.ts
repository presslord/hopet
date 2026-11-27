export interface Shelter {
    id: number;
    slug: string;
    name: string;
    description: string;
    city: string;
    address: string;
    phone: string;
    email: string;
    logo_url: string;
    cover_url: string;
    is_published: "0" | "1";
    created_at: string;
    updated_at: string;
}

export const shelters: Shelter[] = [
    {
        id: 1,
        slug: "lyubov",
        name: "Приют «Любовь и забота»",
        description: "Небольшой домашний приют для кошек. Лечим, стерилизуем и ищем ответственных хозяев для пушистых друзей.",
        city: "Велкиий Новгород",
        address: "ул. Большая Санкт-Петербургская",
        phone: "+7 (999) 123-45-67",
        email: "lyubov-shelter@lyubov-shelter.ru",
        logo_url: "/shelters/shlter-logo1.png",
        cover_url: "/shelters/shelter-cover1.avif",
        is_published: "0",
        created_at: " ",
        updated_at: " "
    },
    {
        id: 2,
        slug: "verny-drug",
        name: "Центр помощи животным «Верный друг»",
        description: "Крупный приют для собак разных пород и размеров. Проводим кинологические занятия и дни открытых дверей каждые выходные.",
        city: "Великий Новгород",
        address: "ул. Большая Московская",
        phone: "+7 (812) 987-65-43",
        email: "vernydrug@vernydrug.ru",
        logo_url: "/shelters/shelter-logo2.jpg",
        cover_url: "/shelters/shelter-cover2.jpeg",
        is_published: "1",
        created_at: " ",
        updated_at: " "
    },

    {
        id: 3,
        slug: "lapki",
        name: "Фонд «Мягкие лапки»",
        description: "Помогаем котятам и взрослым кошкам, попавшим в беду. Работаем по системе временных передержек.",
        city: "Великий Новгород",
        address: "ул. Советской Армии",
        phone: "+7 (843) 555-35-35",
        email: "lapki-kzn@lapki-kzn.ru",
        logo_url: "/shelters/shelter-logo3.png",
        cover_url: "/shelters/shelter-cover3.jpg",
        is_published: "1",
        created_at: " ",
        updated_at: " "
    }
]