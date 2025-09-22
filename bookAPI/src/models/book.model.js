import { integer, pgTable, varchar,uuid,text } from "drizzle-orm/pg-core";
import {booksTable} from './author.model.js';

export const booksTable = pgTable("books", {
  id: uuid().primaryKey().generatedAlwaysAsIdentity(),
  name: varchar({ length: 255 }).notNull(),
  author: varchar({ length: 255 }).notNull(),
  description: text(),
  authorId:uuid().references(()=> booksTable.id).notNull(),
  created_at: integer().defaultTo(integer().now()),
  updated_at: integer().defaultTo(integer().now()),
});
