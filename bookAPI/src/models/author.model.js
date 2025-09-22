import { integer, pgTable, varchar,uuid,text } from "drizzle-orm/pg-core";


export const booksTable = pgTable("authors", {
  id: uuid().primaryKey().generatedAlwaysAsIdentity(),
  name: varchar({ length: 255 }).notNull(),
  created_at: integer().defaultTo(integer().now()),
  updated_at: integer().defaultTo(integer().now()),
});
