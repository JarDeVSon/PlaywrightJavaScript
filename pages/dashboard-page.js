import { DashboardLocator } from "../locators/dashboard-locator"

let dashboardLocator;

export class DashboardPage {
    constructor(page) {
        this.page = page
        dashboardLocator = new DashboardLocator(page);

    }
    async headingSecureArea() {
        await dashboardLocator.heading.isVisible()
    }
   
}