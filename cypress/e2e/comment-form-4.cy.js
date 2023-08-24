describe("Comment form", () => {
  it("allows comments to be submitted", () => {
    cy.visit("leave-a-comment.html");

    cy.input("Name").type("John Smith");
    cy.input("Email").type("john.smith@email.invalid");
    cy.input("Phone").type("012-345-6789");
    cy.input("Comments").type("Lorem ipsum dolor sit amet");
    cy.contains("Submit").click();

    cy.toast("success", "Success", "Your comment was received")
      .close();

    cy.input("Name").should("be.disabled");
    cy.input("Email").should("be.disabled");
    cy.input("Phone").should("be.disabled");
    cy.input("Comments").should("be.disabled");
    cy.contains("Submit").should("be.disabled");
  });
});
