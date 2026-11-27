import { sql } from "drizzle-orm";
import { sqliteTable, integer, text, uniqueIndex } from "drizzle-orm/sqlite-core"
import { users } from './users';
import { shelters } from "./shelters";

export const volunteers = sqliteTable('volunteers', {
    id: integer().primaryKey({ autoIncrement: true }),
    user_id: integer().notNull().references(() => users.id),
    shelter_id: integer().notNull().references(() => shelters.id),
    approved_at: text().notNull().default(sql`(CURRENT_TIMESTAMP)`),
    available_days: text({ mode: 'json' }).$type<string[]>().notNull().default(sql`'[]'`),
    created_at: text().notNull().default(sql`(CURRENT_TIMESTAMP)`)
},
    (table) => [ uniqueIndex('user_shelter_unique').on(table.user_id, table.shelter_id), ]
);