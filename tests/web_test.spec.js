import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { DashboardPage } from '../pages/DashboardPage';

test.beforeEach('Before Each Hooks', async ({ page }) => {
  await page.goto('/login');
})

test.describe('Suite tests codegen', async () => {

  test('test login codegen', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const dashboardPage = new DashboardPage(page);
    loginPage.login('tomsmith', 'SuperSecretPassword!')
    dashboardPage.headingSecureArea()
    // await page.getByLabel('Username').click();
    // await page.getByLabel('Username').fill('tomsmith');
    // await page.getByLabel('Password').click();
    // await page.getByLabel('Password').fill('SuperSecretPassword!');
    // await page.getByRole('button', { name: ' Login' }).click();
    // await page.getByRole('heading', { name: 'Welcome to the Secure Area. When you are done click logout below.' }).isVisible();
    await page.getByRole('link', { name: 'Logout' }).click();
  })

});

test.afterEach('After Each Hooks', async ({ page }) => {
  await page.close();
})