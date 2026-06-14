import { test, request, expect } from "@playwright/test";


let reqcontext3: any

test.skip("3rd method of api use it for  apllicable toall test ", async () => {

    reqcontext3 = await request.newContext({
        baseURL: "https://restful-booker.herokuapp.com",
        extraHTTPHeaders: {
            Accept: "application/json"
        }
    })




})

test.skip("1st method GET CALL OF API", async ({ request }) => {

    const getres = await request.get("https://restful-booker.herokuapp.com/booking", {

        headers: {
            Accept: "application/json"

        }

    })

    console.log(await getres.json())


})

test.skip("2nd method of get call", async () => {

    const reqcontext = await request.newContext({
        baseURL: "https://restful-booker.herokuapp.com",
        extraHTTPHeaders: {
            Accept: "application/json"
        }

    })

    const req1 = reqcontext.get("/booking")
    console.log((await req1).json())


})


test.skip("3nd method of get call with header", async () => {

    const reqres3 = await reqcontext3.get("/booking")
    console.log(await reqres3.json())
})


test.skip("4th method global config with header ", async ({ request }) => {

    const method4t = await request.get("/booking/?firstname=John&lastname=Smith")
    console.log(await method4t.json())

}
)
test.skip("4th method global config with header and qurry params", async ({ request }) => {

    const method4t = await request.get("/booking/?&", {
        params: {
            firstname: "John",
            lastname: "Smith"
        }
    })
    console.log(await method4t.json())

}
)


test.only("4th method global config and verifictaion asssertion ", async ({ request }) => {

    const method4t = await request.get("/booking/82")
    const ver = await method4t.json()
    expect(method4t.status()).toBe(200)
    // expect(await method4t.body()).toMatchObject({

    //     firstname: 'John',
    //     lastname: 'Smith',
    //     totalprice: 111,
    //     depositpaid: true,
    //     bookingdates: { checkin: '2018-01-01', checkout: '2019-01-01' },
    //     additionalneeds: 'Breakfast'


    // })
    expect (method4t.statusText()).toBe("OK")

})