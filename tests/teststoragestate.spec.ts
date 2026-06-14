import{test,expect} from "@playwright/test"
import data from "../data-files/data.json"


test.only('Authentication State LOGIN PAGE',async ({page})=>{

await page.goto("https://opensource-demo.orangehrmlive.com/")
await page.getByPlaceholder("Username").fill(data.username)
await page.getByPlaceholder("Password").fill(data.password)
await page.getByRole("button",{name:'Login'}).click()
await page.waitForURL("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index")
await expect(page.getByRole("heading",{name:'Dashboard'})).toBeVisible()
await expect(page.getByAltText("client brand banner")).toBeVisible()




})

test("Assign Page",async({page})=>{

await page.getByRole('button', { name: 'Assign Leave'}).click()
await expect(page.getByRole('button', { name: 'Assign',exact:true})).toBeVisible()

// await expect(page.getByRole("link",{name:'Candidates'})).toBeVisible()
})


test(" Page",async({page})=>{

await page.getByRole('link', { name: 'Claim'}).click()
// await expect(page.getByRole("button",{name:'Assign Claim'})).toBeVisible()

})






