import { test, request } from "@playwright/test";


let reqcontext3: any

test.skip("3rd method of api use it for  apllicable toall test ", async () => {

    reqcontext3 = await request.newContext({
        baseURL: "https://restful-booker.herokuapp.com"
    })




})

test.skip("GET CALL OF API", async ({ request }) => {

    const getres = await request.get("https://restful-booker.herokuapp.com/booking")

    console.log(await getres.json())


})

test.skip("2nd method of get call", async () => {

    const reqcontext = await request.newContext({
        baseURL: "https://restful-booker.herokuapp.com"

    })

    const req1 = reqcontext.get("/booking")
    console.log((await req1).json())


})


test.skip("3nd method of get call", async () => {

    const reqres3 = await reqcontext3.get("/booking")
    console.log(await reqres3.json())
})


test("4th method global config ", async ({ request }) => {

    const method4 = await request.get("/booking/110")
    console.log(await method4.json())
    

}
)


