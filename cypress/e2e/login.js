import {Given, When, Then} from "@badeball/cypress-cucumber-preprocessor";
import loginPage from "./pom/login/login.cy.js";

let startTime;
let endTime;

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

When('I submit the password', () => {
    loginPage.inputPassword().type('admin123');
});

When('I click the button login', () => {
    cy.intercept('GET','https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/dashboard/employees/action-summary').as('actionSummary');
        loginPage.buttonSubmit().click();
        cy.wait('@actionSummary').then((intercept) => {
            expect(intercept.response.statusCode).to.equal(200);
        });
});

Then('I verify login success', () => {
    loginPage.dashboardPage().should('have.text','Dashboard');
});

When('I submit invalid username', () => {
    loginPage.inputUsername().type('Miftah');
});

When('I submit invalid password', () => {
    loginPage.inputPassword().type('Miftah');
});

Then('I should see an error message for invalid credentials', () => {
    loginPage.invalidCredentials().should('be.visible').and('have.text','Invalid credentials');
});

Then('I should see a required message', () => {
    loginPage.emptyFields().should('be.visible').and('have.text','Required');
});

When('I click the button', () => {
    loginPage.buttonSubmit().click();
});

When('I click the login button', () => {
    startTime = new Date().getTime();
    loginPage.buttonSubmit().click();
  });

When('I should see the dashboard page', () => {
    loginPage.dashboardPage().should('have.text','Dashboard');
});

Then('I measure the time taken for the login process', () => {
    endTime = new Date().getTime();
    const duration = endTime - startTime;
    cy.log('Login process took: ' + duration + ' ms');
});
