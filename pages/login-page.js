import { LoginLocator } from "../locators/login-locator"

let loginLocator;

export class LoginPage {
    constructor(page){
        this.page = page
        loginLocator = new LoginLocator(page)
    }
    async goto_login(){
        await loginLocator.base_url;
    }
    async login(username, password) {
        await loginLocator.username.fill(username)
        await loginLocator.password.fill(password)
        await loginLocator.login_button.click()  
    }
 
}