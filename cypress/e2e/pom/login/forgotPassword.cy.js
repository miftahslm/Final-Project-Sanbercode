export default class forgotPassword {
    static forgotPassword() {
        return cy.get('[class="oxd-text oxd-text--p orangehrm-login-forgot-header"]');
    }
    static resetPassword() {
        return cy.get('h6').contains('Reset Password');
    }
    static resetPasswordSuccess() {
        return cy.get('h6').contains('Reset Password link sent successfully');
    }
    static buttonSubmit() {
        return cy.get('[type="submit"]');
    }
}