import { test, expect } from "@playwright/test";


test("post call", async ({ request }) => {

    const crepost = await request.post("/booking", {
        headers: {
            "Content-Type": "application/json"
        }, data: {
            "firstname": "Jim",
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

    // console.log(await crepost.json())
    const postres = await crepost.json()

    // expect(postres.status()).toBe(200)
    expect(postres.booking).toMatchObject({
        firstname: 'Jim',
        lastname: 'Brown',
        totalprice: 111,
        depositpaid: true,
        bookingdates: { checkin: '2018-01-01', checkout: '2019-01-01' },
        additionalneeds: 'Breakfast'

    })


})





test.only("post call demo blaze", async ({ request,page }) => {

    const demopost = await request.post("https://api.demoblaze.com/addtocart", {

        data: { "id": "0bc8167c-dcf9-8872-97a7-ccc26d02f4bb", "cookie": "user=737706e5-200b-3a2b-6e16-5bb85281cc4a", "prod_id": 1, "flag": false }

    })

    expect(demopost.status()).toBe(200)
    expect(demopost.statusText()).toBe("OK")

    await page.goto("https://www.demoblaze.com/")
    await  page.getByRole("link",{name:'Cart'}).click()
    await expect (page.getByRole("button",{name:'Place Order'})).toBeVisible()




})


