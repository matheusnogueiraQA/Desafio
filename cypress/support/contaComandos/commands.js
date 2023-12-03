
Cypress.Commands.add('novaConta1', (conta1) => {
    cy.visit('https://seubarriga.wcaquino.me/')
    //Clica em Adicionar Contas
    cy.contains('Contas')
        .click()
    cy.contains('Adicionar')
        .click()
    //Adiciona nome
    cy.get('#nome')
        .type(conta1)
    //Clica em Salvar
    cy.contains('Salvar')
        .click()
})

Cypress.Commands.add('novaConta2', (conta2) => {
    cy.visit('https://seubarriga.wcaquino.me/')
    //Clica em Adicionar Contas
    cy.contains('Contas')
        .click()
    cy.contains('Adicionar')
        .click()
    //Adiciona nome
    cy.get('#nome')
        .type(conta2)
    //Clica em Salvar
    cy.contains('Salvar')
        .click()
})

Cypress.Commands.add('novaConta4', (conta4) => {
    cy.visit('https://seubarriga.wcaquino.me/')
    //Clica em Adicionar Contas
    cy.contains('Contas')
        .click()
    cy.contains('Adicionar')
        .click()
    //Adiciona nome
    cy.get('#nome')
        .type(conta4)
    //Clica em Salvar
    cy.contains('Salvar')
        .click()
})

Cypress.Commands.add('listarContas', () => {
    cy.visit('https://seubarriga.wcaquino.me/')
    // Clica em Listar Contas
    cy.contains('Contas')
        .click()
    cy.contains('Listar')
        .click()
})

Cypress.Commands.add('editarContas', (conta3, conta4) => {
    //Clica em Editar Conta 1
    cy.get('.glyphicon-edit')
        .eq(0)
        .click()

    //Apaga o campo Nome e preenche
    cy.get('#nome')
        .clear()
        .type(conta3)

    //Clica em Salvar
    cy.contains('Salvar')
        .click()

    cy.get('.alert-success')
        .should('exist')

    //Clica em Editar Conta 2
    cy.get('.glyphicon-edit')
        .eq(1)
        .click()

    //Apaga o campo Nome e preenche
    cy.get('#nome')
        .clear()
        .type(conta4)

    //Clica em Salvar
    cy.contains('Salvar')
        .click()
})

Cypress.Commands.add('excluirConta', () => {
    cy.get('.glyphicon-remove-circle')
        .eq(0)
        .click()
})

