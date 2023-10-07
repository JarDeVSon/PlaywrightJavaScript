exports.DashboardPage = class DashboardPage {
    constructor(page) {
        this.page = page
        this.heading = page.getByRole('heading', { name: 'Welcome to the Secure Area. When you are done click logout below.' })

    }

    async headingSecureArea() {
        await this.heading.isVisible()
    }
   
}