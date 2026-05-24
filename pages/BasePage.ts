import { Page } from '@playwright/test';

export class BasePage {

    protected page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async navigate(url: string) {
        await this.page.goto(url);
    }

    async click(locator: string) {
        await this.page.click(locator);
    }

    async type(locator: string, text: string) {
        await this.page.fill(locator, text);
    }

    async getText(locator: string) {
        return await this.page.textContent(locator);
    }
}