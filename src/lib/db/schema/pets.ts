import { sql } from "drizzle-orm";
import { sqliteTable, integer, text, check } from "drizzle-orm/sqlite-core"
import { shelters } from "./shelters";

export const pets = sqliteTable('pets', {
    id: integer().primaryKey({ autoIncrement: true }),
    shelter_id: integer().references(() => shelters.id, { onDelete: 'cascade' }).notNull(),
    name: text().notNull(),
    species: text().notNull(),
    breed: text(),
    age: integer(),
    gender: text(),
    size: text(),
    description: text(),
    status: text({ enum: ['available', 'pending', 'adopted', 'archived'] }).notNull().default('available'),
    created_at: text().notNull().default(sql`(CURRENT_TIMESTAMP)`),
    updated_at: text().notNull().default(sql`(CURRENT_TIMESTAMP)`).$onUpdate(() => sql`(CURRENT_TIMESTAMP)`),
}, (table) => [ check('pet_status_check', sql`${table.status} IN ('available', 'pending', 'adopted', 'archived')`) ]);