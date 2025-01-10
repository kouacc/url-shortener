import { eq } from "drizzle-orm"
import { db } from "~/src/db"
import { urls } from "~/src/schema"

export default defineEventHandler(async (event) => {
    const id = await readBody(event)

    if (!id) {
        throw createError({
            statusCode: 400,
            statusMessage: 'Bad request',
            statusText: 'Missing ID, please provide an ID.'
        })
    }

    const response = await db.query.urls.findFirst({
        where: eq(urls?.shortUrl, id.url)
    })

    if (!response) {
        throw createError({
            statusCode: 404,
            statusMessage: 'Not found',
            statusText: 'URL not found'
        })
    }

    return {
        statusCode: 200,
        body: response.longUrl
    }
    
})