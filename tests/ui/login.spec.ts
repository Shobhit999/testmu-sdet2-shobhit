import { test, expect } from '@playwright/test';

import { LoginPage } from '../../Pages/LoginPage';

test.describe('Login Tests', () => {

    test('Valid Login', async ({ page }) => {

        const loginPage = new LoginPage(page);

        await loginPage.navigate('https://www.saucedemo.com');

        await loginPage.login(
            'standard_user',
            'secret_sauce'
        );

        await expect(page).toHaveURL(/inventory/);
    });

    test('Invalid Login', async ({ page }) => {

        const loginPage = new LoginPage(page);

        await loginPage.navigate('https://www.saucedemo.com');

        await loginPage.login(
            'locked_out_user',
            'wrong_password'
        );

        const error = await loginPage.getErrorMessage();

        expect(error).toContain(
            'Username and password do not match'
        );
    });
});