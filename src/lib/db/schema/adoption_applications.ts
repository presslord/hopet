import { sql } from "drizzle-orm";
import { sqliteTable, integer, text, check } from "drizzle-orm/sqlite-core"
import { pets } from "./pets";
import { shelters } from "./shelters";

export const adoption_applications = sqliteTable('adoption_applications', {
    id: integer().primaryKey({ autoIncrement: true }),
    pet_id: integer().notNull().references(() => pets.id),
    shelter_id: integer().notNull().references(() => shelters.id), 
    name: text().notNull(),
    email: text().notNull(),
    phone: text().notNull(),
    message: text(),
    status: text({ enum: ['new', 'in_review', 'approved', 'rejected'] }).notNull().default('new'),
    note: text(),
    created_at: text().notNull().default(sql`(CURRENT_TIMESTAMP)`), 
    updated_at: text().notNull().default(sql`(CURRENT_TIMESTAMP)`).$onUpdate(() => sql`(CURRENT_TIMESTAMP)`)
},
    (table) => [ check('status_check', sql`${table.status} IN ('new', 'in_review', 'approved', 'rejected')`) ]
);