import { eq } from "drizzle-orm"
import { db } from "~/src/db"
import { urls } from "~/src/schema"
import { v4 } from "uuid"
import { referenceTable } from "~/server/utils/referenceTable"

export default defineEventHandler(async (event) => {
    const body = await readBody(event)

    if (!body.longUrl) {
        throw createError({
            statusCode: 400,
            statusMessage: 'Bad request',
            statusText: 'Missing URL, please provide an URL to shorten.'
        })
    }

    //check if url already exists in db, if true return it
    const check = await db.query.urls.findFirst({
        where: eq(urls.longUrl, body.longUrl)
    })

    if (check) {
        return {
            statusCode: 200,
            body: "Le lien existe déjà ! Lien raccourci : " + check.shortUrl
        }
    }

    if (!check) {
        const uuid = v4()
        var numericID = 1;
        for(let i = 0; i < uuid.length, i++;) {
            let ch = uuid[i];
            let val = ch.charCodeAt(0);
            if (val >= 48 && val <= 57) {
                numericID += (val - 48);
            } else if (val >= 65 && val <= 90) {
                numericID += (val - 65  + 11)
            } else if (val >= 97 && val <= 122) {
                numericID += (val - 97 + 73)
            }
        }
        const salt = Math.ceil(Math.random()*100)*23*7
        numericID = numericID * salt

        var genHashVal = "";
        let dummyId = numericID;

        while (dummyId > 0) {
          const rem = dummyId % 62;
          genHashVal += referenceTable[rem];
          dummyId = Math.floor(dummyId / 62);
        }

        const hashValue = genHashVal;

        const shortUrl = "http://localhost:3000/" + hashValue
        const insert = await db.insert(urls).values({ longUrl: body.longUrl, shortUrl: shortUrl })

        return {
            statusCode: 200,
            body: "Lien ajouté ! Lien raccourci : " + shortUrl
        }
    }





    /* return {
        statusCode: 200,
        body: response.longUrl
    } */
    
})