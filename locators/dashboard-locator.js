export class DashboardLocator{
    constructor(page) {
        this.heading = page.getByRole('heading', { name: 'Welcome to the Secure Area. When you are done click logout below.' })
    }
}