export interface Profile {
    firstName: string;
    lastName: string;
    city: string;
    volunteerDays: number;
    avatar: string;
}

export const profile: Profile = {
    firstName: "Вадим",
    lastName: "Карасев",
    city: "Великий Новгород",
    avatar: "/profile/avatar.jpg",
    volunteerDays: 9
}