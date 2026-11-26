import { sql } from "drizzle-orm";
import { sqliteTable, integer, text, check } from "drizzle-orm/sqlite-core"

export const shelters = sqliteTable('shelters', {
    id: integer().primaryKey({ autoIncrement: true }),
    slug: text().notNull().unique(),
    name: text().notNull(),
    description: text(),
    city: text().notNull(),
    address: text(),
    phone: text(),
    email: text(),
    logo_url: text(),
    cover_url: text(),
    is_published: integer({ mode: 'boolean' }).notNull().default(false),
    created_at: text().notNull().default(sql`(CURRENT_TIMESTAMP)`),
    updated_at: text().notNull().default(sql`(CURRENT_TIMESTAMP)`).$onUpdate(() => sql`(CURRENT_TIMESTAMP)`),
});