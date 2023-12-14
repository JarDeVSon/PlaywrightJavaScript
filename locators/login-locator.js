export class LoginLocator {
    constructor(page){
        this.base_url = page.goto('/login')
        this.username = page.getByLabel('Username')
        this.password = page.getByLabel('Password')
        this.login_button = page.getByRole('button', { name: ' Login' })
    }
}