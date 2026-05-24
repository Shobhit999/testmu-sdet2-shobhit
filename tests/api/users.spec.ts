import { test, expect } from '@playwright/test';

test.describe('JSONPlaceholder API Tests', () => {

    test('Get Posts', async ({ request }) => {

        const response = await request.get(
            'https://jsonplaceholder.typicode.com/posts'
        );

        expect(response.status()).toBe(200);

        const responseBody = await response.json();

        expect(responseBody.length).toBeGreaterThan(0);
    });

    test('Create Post', async ({ request }) => {

        const response = await request.post(
            'https://jsonplaceholder.typicode.com/posts',
            {
                data: {
                    title: 'Playwright API Test',
                    body: 'Test Body',
                    userId: 1
                }
            }
        );

        expect(response.status()).toBe(201);

        const responseBody = await response.json();

        expect(responseBody.title).toBe(
            'Playwright API Test'
        );
    });
});