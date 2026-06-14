import { test } from "@playwright/test"
import { request } from "node:http"

/////----------------------token expired
test("PUT UPDATE ", async ({ request }) => {

    const putreq = await request.delete("/booking/1", {
        headers: {
            cookie:"token=<token_value>"
        }   

    })


    const specdata = await putreq.json()
    console.log(specdata)

})