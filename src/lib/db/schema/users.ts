import { sql } from "drizzle-orm";
import { sqliteTable, integer, text, check } from "drizzle-orm/sqlite-core"

export const users = sqliteTable('users', {
    id: integer().primaryKey({ autoIncrement: true }),
    email: text().notNull().unique(), 
    display_name: text().notNull(), 
    password_hash: text().notNull(), 
    role: text({ enum: ['admin', 'volunteer', 'shelter'] }).notNull(), 
    shelter_id: integer(),
    //.references(() => shelters.id), 
    created_at: text().notNull().default(sql`(CURRENT_TIMESTAMP)`), 
    updated_at: text().notNull().default(sql`(CURRENT_TIMESTAMP)`).$onUpdate(() => sql`(CURRENT_TIMESTAMP)`)
    },
    (table) => [ check('role_check', sql`${table.role} IN ('admin', 'volunteer', 'shelter')`) ]
);