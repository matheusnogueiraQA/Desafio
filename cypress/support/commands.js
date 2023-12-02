Cypress.Commands.add('login', () =>{
    const email = Cypress.env('email')
    const login = () => {
        cy.visit('https://seubarriga.wcaquino.me/login')
        //Preenche os campos email e senha existentes
        cy.get('#email')
        .type(Cypress.env('email'))
        cy.get('#senha')
        .type(Cypress.env('password'), { log: false })

        //Clica em Cadastrar
        cy.contains('Entrar')
        .click()
        
        cy.get('.alert-success')
        .should('exist')
    }

    cy.session(email, login)
})
