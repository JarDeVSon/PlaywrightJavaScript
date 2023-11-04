import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { DashboardPage } from '../pages/DashboardPage';
import { data } from '../fixtures/data.json'


let loginPage;
let dashboardPage;

test.describe('Suite de testes Web - LoginPage', async () => {

  test.beforeEach('Before Each Hooks', async ({ page }) => {
    loginPage = new LoginPage(page);
    dashboardPage = new DashboardPage(page);
    await page.goto('/login');
  })

  test('test login with successfully', async ({ page }) => {
    console.log('test login with successfully')
    await loginPage.login(data.username, data.password);
    await dashboardPage.headingSecureArea();
    expect(page.getByRole('heading', { name: 'Welcome to the Secure Area. When you are done click logout below.' })).toHaveText(/Welcome to the Secure Area. When you are done click logout below./);
    await page.getByRole('link', { name: 'Logout' }).click();
  })

  test.afterEach('After Each Hooks', async ({ page }) => {
    await page.close();
  })
});
