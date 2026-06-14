import { test, expect } from "@playwright/test";
import { request } from "node:http";

let tokenValue: any
test.beforeAll("authentication api token create", async ({ request }) => {

    const tokenPost = await request.post("https://restful-booker.herokuapp.com/auth", {
        data: {
            "username": "admin",
            "password": "password123"
        }
    })
    // console.log(await tokenPost.json())   //-declare global vaariable by let beacause  we can not  console log things in automation


    tokenValue = (await tokenPost.json()).token  // this is right rather than console log

})


// ************************ noow using token to update***********


test("PUT UPDATE ", async ({ request }) => {

    const puttokenvalue = await request.put("https://restful-booker.herokuapp.com/booking/1", {
        headers: {
            Cookie: "token=" + tokenValue              // `token=${tokenValue}`-can also be used
        },
        data: {
            "firstname": "RAIs",
            "lastname": "Brown",
            "totalprice": 111,
            "depositpaid": true,
            "bookingdates": {
                "checkin": "2018-01-01",
                "checkout": "2019-01-01"
            },
            "additionalneeds": "Breakfast"

        }

    })



    expect(puttokenvalue.status()).toBe(200)
    //***************************************** */
    const roken = await puttokenvalue.json()
    //console.log(roken)
     expect(roken.firstname).toBe("RAIs")




})


test("delete ", async ({ request }) => {

    const puttokenvalue = await request.delete("https://restful-booker.herokuapp.com/booking/6", {
        headers: {
            Cookie: "token=" + tokenValue              // `token=${tokenValue}`-can also be used
        },
    }
    )


    expect(puttokenvalue.status()).toBe(201)
})