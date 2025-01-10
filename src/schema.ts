import { pgTable, uuid, text } from "drizzle-orm/pg-core";
import { type InferSelectModel } from "drizzle-orm";

export const urls = pgTable('urls', {
    id: uuid().defaultRandom(),
    shortUrl: text(),
    longUrl: text(),
})

export type Urls = InferSelectModel<typeof urls>;