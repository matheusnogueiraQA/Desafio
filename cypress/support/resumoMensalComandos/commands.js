Cypress.Commands.add('filtraMovimentacao', () => {
    cy.contains('Resumo Mensal')
        .click()
    cy.get('#mes').select('Fevereiro');
    cy.get('#ano').select('2023');
    cy.contains('Buscar')
        .click()
})

Cypress.Commands.add('deletaMovimentacao', () => {
    cy.get('.glyphicon-remove-circle')
    .eq(0)
    .click()
})