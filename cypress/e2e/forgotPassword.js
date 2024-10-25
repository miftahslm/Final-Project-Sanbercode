import {Given, When, Then} from "@badeball/cypress-cucumber-preprocessor";
import loginPage from "./pom/login/login.cy.js";
import forgotPassword from "./pom/login/forgotPassword.cy.js";


Given('I visit the URL', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    cy.wait(1000);
});

When('I should see the homepage', () => {
    loginPage.verifyLoginPage().should('have.text','Login');
});

When('I submit the username', () => {
    loginPage.inputUsername().type('Admin');
});

When('I click forgot password', () => {
    forgotPassword.forgotPassword().click();
});

Then('I should see the reset password page', () => {
    forgotPassword.resetPassword().should('have.text','Reset Password');
});

When('I click the button of reset password', () => {
    forgotPassword.buttonSubmit().click();
});

Then('I should see the message reset password successful', () => {
    forgotPassword.resetPasswordSuccess().should('have.text','Reset Password link sent successfully');
});
