// https://docs.cypress.io/api/introduction/api.html

describe("Basic runthrough", () => {
    it("Visits the app root url", () => {
        cy.visit("/");
        cy.contains("h1", "Galaxy Dashboard");
    });
    it("Can log in as my user", () => {
        cy.visit("/login");
        cy.get("input[name=username]").type("foo@foo.com");
        cy.get("input[name=password]").type("password{enter}");
    });
    it("About shows information", () => {
        cy.visit("/");
        cy.contains("h1", "Galaxy Dashboard");
    });
    it("Dashboard loads active workflows", () => {
        cy.visit("/");
        cy.contains("h1", "Galaxy Dashboard");
    });
    it("Logout resets everything correctly", () => {
        cy.visit("/logout");
        cy.contains("h1", "Galaxy Dashboard");
    });
});
