import { defineConfig } from "drizzle-kit";

export default defineConfig({
  schema: "./src/lib/db/schema",
  out: "./drizzle",
  dialect: "sqlite",
  dbCredentials: { url: process.env.DATABASE_FILE ?? "data/app.db" },
});