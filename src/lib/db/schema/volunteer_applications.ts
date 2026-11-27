import { sql } from "drizzle-orm";
import { sqliteTable, integer, text, uniqueIndex } from "drizzle-orm/sqlite-core"
import { users } from './users';
import { shelters } from "./shelters";

export const volunteer_applications = sqliteTable('volunteer_applications', {
    id: integer().primaryKey({ autoIncrement: true }),
    user_id: integer().notNull().references(() => users.id),
    shelter_id: integer().notNull().references(() => shelters.id),
    name: text().notNull(),
    email: text().notNull().unique(),
    phone: text().notNull(),
    message: text().notNull(),
    help_types: text({ mode: 'json' }).$type<string[]>().notNull().default(sql`'[]'`), 
    available_days: text({ mode: 'json' }).$type<string[]>().notNull().default(sql`'[]'`),
    status: text({ enum: ['new', 'approved', 'rejected', 'cancelled'] }).notNull().default('new'),
    note: text().notNull(),
    created_at: text().notNull().default(sql`(CURRENT_TIMESTAMP)`), 
    updated_at: text().notNull().default(sql`(CURRENT_TIMESTAMP)`).$onUpdate(() => sql`(CURRENT_TIMESTAMP)`)
});
