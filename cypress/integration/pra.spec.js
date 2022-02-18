describe("Verify the login functionality", () => {
    it("verify the login with valid credentials", () => {
      cy.visit("https://www.zoomin.com/sign-in?%2F");
      cy.get('input[type="text"]').type("karan.minskole@gmail.com");
      cy.get('input[type="password"]').type("Minskole@903");
      cy.get('button[type="submit"]').click();
      cy.get(".navbar-logo > a > img").should("be.visible");
    });
    it("verify the login with invalid credentials", () => {
      cy.visit("https://www.zoomin.com/sign-in?%2F");
      cy.get('input[type="text"]').type("karan.minskole@gmail.com");
      cy.get('input[type="password"]').type("Minskole@9024");
      cy.get('button[type="submit"]').click();
      cy.get('div[role="alert"]').should("be.visible");
  
    });
});