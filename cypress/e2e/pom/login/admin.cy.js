export default class AdminPage {
    static adminMenu() {
        return cy.get('[href="/web/index.php/admin/viewAdminModule"]').contains('Admin');
    }
    static adminPage() {
        return cy.get('h6').contains('Admin');
    }
    static enterUsername() {
        return cy.get(".oxd-input").eq(1);
    }
    static enterEmployeeName() {
        return cy.get(".oxd-input").eq(1);
    }
    static selectUserRole() {
        return cy.get('.oxd-select-text').contains('-- Select --');
    }
    static selectStatus() {
        return cy.get('.oxd-select-text').contains('-- Select --');
    }
    static buttonSearch() {
        return cy.get('[type="submit"]').click();
    }

}