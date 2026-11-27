export interface VolunteerApplication {
    id: number;
    user_id: number;
    shelter_id: number;
    name: string;
    email: string;
    phone: string;
    message: string;
    help_types: string;
    available_days: string;
    status: string;
    note: string;
    created_at: string;
    updated_at: string;
}

export const volunteerApplications: VolunteerApplication[] = [
  {
    id: 1,
    user_id: 201,
    shelter_id: 10,
    name: "Ольга Кузнецова",
    email: "olga.kuznetsova@example.ru",
    phone: "+7 (921) 334-12-89",
    message: "Готова помогать с выгулом собак и уборкой вольеров по выходным.",
    help_types: "выгул собак, уборка",
    available_days: "сб, вс",
    status: "approved",
    note: "Прошла вводный инструктаж, добавлена в список волонтёров",
    created_at: " ",
    updated_at: " ",
  },
  {
    id: 2,
    user_id: 218,
    shelter_id: 10,
    name: "Артём Соколов",
    email: "artem.sokolov@example.ru",
    phone: "+7 (911) 745-60-23",
    message: "Есть личный автомобиль, могу возить животных в ветклинику и доставлять корма.",
    help_types: "автопомощь, доставка корма",
    available_days: "вт, чт, сб",
    status: "pending",
    note: "Ожидает звонка координатора",
    created_at: " ",
    updated_at: " ",
  },
  {
    id: 3,
    user_id: 224,
    shelter_id: 12,
    name: "Мария Лебедева",
    email: "m.lebedeva@example.ru",
    phone: "+7 (906) 812-49-05",
    message: "Занимаюсь фотографией и ведением соцсетей, хочу делать фотосессии для пиара питомцев.",
    help_types: "фотосъёмка, ведение соцсетей",
    available_days: "вс",
    status: "in_review",
    note: "Прислала портфолио, согласовываем время съёмки",
    created_at: " ",
    updated_at: " ",
  },
  {
    id: 4,
    user_id: 230,
    shelter_id: 11,
    name: "Игорь Новиков",
    email: "igor.novikov@example.ru",
    phone: "+7 (952) 198-74-31",
    message: "Хочу помогать с мелким ремонтом будок и закупкой стройматериалов.",
    help_types: "ремонт, хозяйственная помощь",
    available_days: "сб",
    status: "rejected",
    note: "На данный момент штат хозяйственных волонтёров укомплектован",
    created_at: " ",
    updated_at: " ",
  },
];
