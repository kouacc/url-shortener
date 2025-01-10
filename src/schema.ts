import { pgTable, uuid, text } from "drizzle-orm/pg-core";
import { sql, type InferInsertModel, type InferSelectModel } from "drizzle-orm";

export const urls = pgTable('urls', {
    id: uuid(),
    shortUrl: text(),
    longUrl: text(),
})

export type Urls = InferSelectModel<typeof urls>;