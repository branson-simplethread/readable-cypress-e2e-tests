Cypress.Commands.add("input", function(labelText) {
  cy.contains("label", labelText).then($label => {
    cy.get(`#${$label.attr("for")}`);
  });
});

Cypress.Commands.add("toast", function(flavor, title, body) {
  cy.get(`.toast.text-bg-${flavor}`)
    .should("be.visible")
    .contains(".toast-body", body)
    .parent(".toast")
    .contains(".toast-header", title)
    .parent(".toast");
});

Cypress.Commands.add("close", { prevSubject: true }, function(subject) {
  cy.wrap(subject)
    .should("be.visible")
    .get('[aria-label="Close"]')
    .click();
  cy.wrap(subject)
    .should("not.be.visible");
});

Cypress.Commands.add("button", function(value) {
  cy.contains(".btn", value);
});
