describe("Comment form", () => {
  it("allows comments to be submitted", () => {
    cy.visit("leave-a-comment.html");

    cy.get("#name").type("John Smith");
    cy.get("#email").type("john.smith@email.invalid");
    cy.get("#phone").type("012-345-6789");
    cy.get("#comments").type("Lorem ipsum dolor sit amet");
    cy.contains("Submit").click();

    cy.contains(".toast-header", "Success").should("be.visible");
    cy.contains(".toast-body", "Your comment was received").should("be.visible");

    cy.get("#name").should("be.disabled");
    cy.get("#email").should("be.disabled");
    cy.get("#phone").should("be.disabled");
    cy.get("#comments").should("be.disabled");
    cy.contains("Submit").should("be.disabled");
  });
});
