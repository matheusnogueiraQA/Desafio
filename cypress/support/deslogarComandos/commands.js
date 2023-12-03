Cypress.Commands.add('deslogar', () => {
    cy.contains('Sair')
        .click()
})