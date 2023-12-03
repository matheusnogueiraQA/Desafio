Cypress.Commands.add('login', (email, senha) => {
     //Preenche os campos email e senha
    cy.get('#email')
        .type(email)
    cy.get('#senha')
        .type(senha)

    //Clica em Cadastrar
    cy.contains('Entrar')
        .click()

    cy.get('.alert-success')
        .should('exist')
})
