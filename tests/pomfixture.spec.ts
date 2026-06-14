import { serialize } from "node:v8"
import { test } from "../fixtures/pom-fixtues"


//test.use({viewport:{width:1280 ,height:720}})


test("POM fixture test", {


    annotation: {
        type: "mylink",                 // -----annotation 
        description: "www.blogspot.com"
    }
}, async ({ page, loginPage }) => {


    await page.goto("https://testautomationpractice.blogspot.com/")
    await page.screenshot({fullPage:true})      // screenshot
})
