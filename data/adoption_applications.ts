export interface AdoptionApplication {
    id: number;
    pet_id: number;
    shelter_id: number;
    name: string;
    email: string;
    phone: string;
    message: string;
    status: "new" | "approved" | "rejected" | "cancelled";
    note: string;
    created_at: string;
    updated_at: string;
}

export const adoptionApplication: AdoptionApplication[] = [
  {
    id: 1,
    pet_id: 101,
    shelter_id: 10,
    name: "Анна Смирнова",
    email: "anna.smirnova@example.ru",
    phone: "+7 (921) 555-01-42",
    message: "Здравствуйте! Живу в Великом Новгороде в частном доме с огороженным участком, есть опыт содержания собак.",
    status: "new",
    note: "Первичный звонок запланирован на завтра",
    created_at: " ",
    updated_at: " ",
  },
  {
    id: 2,
    pet_id: 104,
    shelter_id: 10,
    name: "Дмитрий Волков",
    email: "d.volkov@example.ru",
    phone: "+7 (911) 602-19-84",
    message: "Хотим взять кота вторым питомцем. На окнах установлены сетки-антикошки.",
    status: "approved",
    note: "Условия проверены, согласована дата передачи животного",
    created_at: " ",
    updated_at: " ",
  },
  {
    id: 3,
    pet_id: 108,
    shelter_id: 12,
    name: "Елена Морозова",
    email: "elena.morozova@example.ru",
    phone: "+7 (905) 290-77-11",
    message: "Очень понравился пёс по фото, готовы приехать познакомиться в ближайшие выходные.",
    status: "rejected",
    note: "Кандидат часто бывает в командировках, нет возможности обеспечить регулярный выгул",
    created_at: " ",
    updated_at: " ",
  },
  {
    id: 4,
    pet_id: 112,
    shelter_id: 11,
    name: "Максим Орлов",
    email: "m.orlov@example.ru",
    phone: "+7 (953) 904-33-56",
    message: "Ищу спокойного взрослого кота в квартиру. Аллергии ни у кого из семьи нет.",
    status: "cancelled",
    note: "Запрошены фото условий проживания",
    created_at: " ",
    updated_at: " ",
  },
];
