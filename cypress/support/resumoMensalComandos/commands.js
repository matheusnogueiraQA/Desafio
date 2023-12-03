Cypress.Commands.add('filtraMovimentacao', (conta1) => {
    cy.visit('https://seubarriga.wcaquino.me/')
    //Clica em Adicionar Contas
    cy.contains('Contas')
       //Clica em Resumo Mensal
       cy.contains('Resumo Mensal')
       .click()

   //Clica em Mês e Fevereiro
   cy.get('#mes').select('Fevereiro');

   //Clica em Ano e 2023
   cy.get('#ano').select('2023');

   //Clica em Buscar
   cy.contains('Buscar')
       .click()

   cy.get('tbody tr')
       .should('have.length', 7)
})