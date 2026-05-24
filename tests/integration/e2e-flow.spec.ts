import { test, expect } from '@playwright/test';

import { LoginPage } from '../../Pages/LoginPage';

test.describe('Integration Flow', () => {

    test('API + UI Flow', async ({ page, request }) => {

        // API Call
        const apiResponse = await request.get(
            'https://jsonplaceholder.typicode.com/posts/1'
        );

        expect(apiResponse.status()).toBe(200);

        const responseBody = await apiResponse.json();

        expect(responseBody.id).toBe(1);

        // UI Flow
        const loginPage = new LoginPage(page);

        await loginPage.navigate(
            'https://www.saucedemo.com'
        );

        await loginPage.login(
            'standard_user',
            'secret_sauce'
        );

        await expect(page).toHaveURL(/inventory/);
    });
});