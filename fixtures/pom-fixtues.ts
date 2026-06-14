import { test as basetest } from "@playwright/test"
import { LoginPage } from "../pages/LoginPage"

type POMFixture = {

    loginPage: LoginPage;

}

export const test = basetest.extend<POMFixture>({

    loginPage: async ({ page }, use) => {
        const loginPage =new LoginPage(page)
        await use(loginPage)
    }

})

export {expect} from "@playwright/test"