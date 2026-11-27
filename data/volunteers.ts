export interface Volunteer {
    id: number;
    user_id: number;
    shelter_id: number;
    approved_at: string;
    available_days: string;
    created_at: string;
}

export const volunteers: Volunteer[] = [
  {
    id: 1,
    user_id: 201,
    shelter_id: 10,
    approved_at: " ",
    available_days: "сб, вс",
    created_at: " ",
  },
  {
    id: 2,
    user_id: 204,
    shelter_id: 10,
    approved_at: " ",
    available_days: "пн, ср, пт",
    created_at: " ",
  },
  {
    id: 3,
    user_id: 209,
    shelter_id: 12,
    approved_at: " ",
    available_days: "вт, чт, сб, вс",
    created_at: " ",
  }
]