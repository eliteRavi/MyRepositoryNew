import{test,expect}from "@playwright/test"

test("3rd method of saving storage using dependecies",async({page})=>{

await page.goto("https://opensource-demo.orangehrmlive.com/")
await page.getByPlaceholder("Username").fill("Admin")
await page.getByPlaceholder("Password").fill("admin123")
await page.getByRole("button",{name:'Login'}).click()
await page.waitForURL("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index")
await expect(page.getByRole("heading",{name:'Dashboard'})).toBeVisible()
await expect(page.getByAltText("client brand banner")).toBeVisible()

await page.context().storageState({path:'./playwright/auth.json'})





})