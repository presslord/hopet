export interface User {
    id: number;
    email: string;
    display_name: string;
    password_hash: string;
    role: "volunteer" | "shelter" | "admin";
    shelter_id: number;
    created_at: string;
    updated_at: string;
}

export const users: User[] = [
    {
        id: 1,
        email: "admin@gmail.ru",
        display_name: "Светала Исаева",
        password_hash: "12345",
        role: "admin",
        shelter_id: 0, 
        created_at: " ",
        updated_at: " "
    },
    {
        id: 2,
        email: "admin@mail.ru",
        display_name: "Анна Яковлева",
        password_hash: "6789",
        role: "admin",
        shelter_id: 1,
        created_at: " ",
        updated_at: ""
    },
    {
        id: 3,
        email: "volunteer@gmail.ru",
        display_name: "Егор Вердеревский",
        password_hash: "00000",
        role: "volunteer",
        shelter_id: 2,
        created_at: " ",
        updated_at: " "
    }
];