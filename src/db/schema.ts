import { pgTable, serial, text, boolean, timestamp } from "drizzle-orm/pg-core";

export const usersTodo = pgTable("todo", {
  id: serial("id").primaryKey(),
  text: text("text").notNull(),
  done: boolean("done").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});
