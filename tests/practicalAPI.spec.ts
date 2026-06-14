import { test, request,expect } from "@playwright/test";


test("demo blaze practical api ", async({request})=>{

const reqblaze= await request.get("https://api.demoblaze.com/entries")
 const resblaze= await reqblaze.json()
//  console.log(resblaze)       //--------it will print all the response

// console.log(resblaze.Items[1])  // --------it will print specific item

console.log(resblaze.Items[1].title)     // it will print title of specific 


})



test("demo blaze API verification with UI ", async({request,page})=>{

const reqblaze= await request.get("https://api.demoblaze.com/entries")
 const resblaze= await reqblaze.json()
//  console.log(resblaze)       //--------it will print all the response

// console.log(resblaze.Items[1])  // --------it will print specific item

// console.log(resblaze.Items[1].title)     // it will print title of specific 
await page.goto("https://www.demoblaze.com/")
await expect(page.getByRole("link",{name:'Nokia lumia 1520'})).toHaveText("Nokia lumia 1520")


})