Cypress.Commands.add('login', (email, senha) => {
    cy.visit('https://seubarriga.wcaquino.me/login')
    //Preenche os campos email e senha
    cy.get('#email')
        .type(email)
    cy.get('#senha')
        .type((senha), {log: false})
    //Clica em Entrar
    cy.contains('Entrar')
        .click()
})

Cypress.Commands.add('novoUsuario', (nome, email, senha) => {
    cy.visit('https://seubarriga.wcaquino.me/login')
    cy.contains('Novo usuário?')
        .click()
    //Preenche os campos email e senha
    cy.get('#nome')
        .type(nome)
    cy.get('#email')
        .type(email)
    cy.get('#senha')
        .type(senha)

    //Clica em Cadastrar
    cy.contains('Cadastrar')
        .click()
})