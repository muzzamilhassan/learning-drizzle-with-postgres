import { relations } from 'drizzle-orm';
import { jsonb, pgTable, serial, text, varchar,time,timestamp,date, integer } from 'drizzle-orm/pg-core';

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").unique().notNull(),
  password: text("password").notNull(),
  dateOfBirth: date("date_of_birth").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});
export const userRelateionships = relations(users, ({one}) => ({
  profile: one(profile,{
    fields: [users.id],
    references: [profile.userId],
  }),
}));

export const profile = pgTable("profile",{
  id: serial("id").primaryKey(),
  bio: varchar("bio", { length: 255 }),
  userId: integer("user_id").references(() => users.id)
})