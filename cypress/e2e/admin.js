import {Given, When, Then} from "@badeball/cypress-cucumber-preprocessor";
import loginPage from "./pom/login/login.cy.js";
import AdminPage from "./pom/login/admin.cy.js";


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

When('I click admin menu', () => {
    AdminPage.adminMenu().click();
});

Then('I should see the admin page', () => {
    AdminPage.adminPage().should('have.text','Admin');
});

When('I enter {string} in the username field', (username) => {
    AdminPage.enterUsername().type(username);
});
  
When('I enter {string} in the employee name field', (employeeName) => {
   AdminPage.enterEmployeeName().type(employeeName);
});
  
When('I select the user role', () => {
    AdminPage.selectUserRole().click();
});
  
When('I select the status', () => {
    AdminPage.selectStatus().click();
});

When('I click the search button', () => {
    AdminPage.buttonSearch().click();
});
