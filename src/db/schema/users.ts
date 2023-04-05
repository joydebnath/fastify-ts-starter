import { int, mysqlTable, text, varchar } from "drizzle-orm/mysql-core";

export const users = mysqlTable('users', {
    id: int('id').primaryKey(),
    fullName: varchar('full_name', { length: 255 }).notNull(),
    email: varchar('email', { length: 255 }).notNull(),
    password: varchar('password', { length: 255 }).notNull(),
    imageUl: text('image_url'),
});