import { BasePage } from './BasePage';

export class LoginPage extends BasePage {

    private usernameInput = '#user-name';

    private passwordInput = '#password';

    private loginButton = '#login-button';

    private errorMessage = '[data-test="error"]';

    async login(username: string, password: string) {

        await this.type(this.usernameInput, username);

        await this.type(this.passwordInput, password);

        await this.click(this.loginButton);
    }

    async getErrorMessage() {

        return await this.getText(this.errorMessage);
    }
}