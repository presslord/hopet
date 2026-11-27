import { sql } from "drizzle-orm";
import { sqliteTable, integer, text } from "drizzle-orm/sqlite-core"
import { pets } from "./pets";

export const pet_media = sqliteTable('pet_media', {
    id: integer().primaryKey({ autoIncrement: true }),
    pet_id: integer().notNull().references(() => pets.id),
    url: text().notNull(),
    sort_order: integer().notNull().default(0),
    created_at: text().notNull().default(sql`(CURRENT_TIMESTAMP)`)
});