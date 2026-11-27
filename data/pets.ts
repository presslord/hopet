export interface Pet {
    id: number; 
    shelter_id: number;
    name: string; 
    species: "cat" | "dog"; 
    breed: string; //порода
    age: string; // Возраст
    gender: 'male' | 'female';
    size: string;
    description: string; // История животного
    status: "available" | "pending" | "adopted" | "archived";
    created_at: string; //чтобы запись создать
    updated_at: string;
}

export const pets: Pet[] = [
    {
        id: 1,
        shelter_id: 1,
        name: "Снежок",
        species: "cat",
        breed: "Метис",
        age: "2 года",
        gender: "male",
        size: "Средний",
        description: "Огонь булочка ракета, не бит не крашен, перед продажей на мойке отмыт. Очень ласковый мурлыка, ищет диван и любящие руки.",
        status: "available",
        created_at: " ",
        updated_at: " "
    },
        {
        id: 3,
        shelter_id: 2,
        name: "Джесси",
        species: "dog",
        breed: "Дворняжка",
        age: "2 года",
        gender: "female",
        size: "Средний",
        description: "Активная и жизнерадостная девочка. Обожает долгие прогулки в парке и игры с мячом. Отлично ладит с детьми.",
        status: "pending",
        created_at: " ",
        updated_at: " "
    },
    {
        id: 4,
        shelter_id: 2,
        name: "Рекс",
        species: "dog",
        breed: "Немецкая овчарка",
        age: "5 лет",
        gender: "male",
        size: "Крупный",
        description: "Верный защитник и умный пес. Знает базовые команды, спокойно ведет себя на поводке. Ищет опытного хозяина.",
        status: "adopted",
        created_at: " ",
        updated_at: " "
    },
    {
        id: 5,
        shelter_id: 3,
        name: "Муся",
        species: "cat",
        breed: "Британская короткошерстная",
        age: "8 месяцев",
        gender: "female",
        size: "Маленький",
        description: "Игривый котенок-подросток с плюшевой шерсткой. Немного стесняется незнакомцев, но быстро привыкает и начинает тарахтеть.",
        status: "archived",
        created_at: " ",
        updated_at: " "
    }
];