export interface Profile {
    firstName: string;
    lastName: string;
    city: string;
    volunteerDays: number;
    avatar: string;
}

export const profile: Profile = {
    firstName: "Дарья",
    lastName: "Примерова",
    city: "Великий Новгород",
    avatar: "/profile/avatark.jpg",
    volunteerDays: 9
}
