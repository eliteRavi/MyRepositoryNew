import { test as basetest } from "@playwright/test"
import { Locator, Page } from "@playwright/test"



export class LoginPage {

    readonly page: Page
    readonly userNameInput: Locator
    readonly passwordInput: Locator
    readonly loginButton: Locator


    constructor(page: Page) {

        this.page = page
        this.userNameInput = page.getByPlaceholder("Username")
        this.passwordInput = page.getByPlaceholder("Password")
        this.loginButton = page.getByRole("button", { name: 'Login' })


    }


    /**
     * This method will open the page
     * @param page 
     */
    async gotoOrangeHRM(page: Page) {

        await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

    }

    /**
     * 
     * @param username This will login the app
     * @param password 
     */
    async loginOrangeHRM(username: string, password: string) {

        await this.userNameInput.fill(username)
        await this.passwordInput.fill(password)
        await this.loginButton.click()

    }


}