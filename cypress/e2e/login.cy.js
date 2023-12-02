describe('Login', () => {
    beforeEach(() => {
        cy.visit('https://seubarriga.wcaquino.me/login')
    })

    it('Crie um novo usuário com sucesso', () => {
        //Clica no botão 'Novo usuário?'
        cy.get('a')
            .eq(2)
            .click()

        //Preenche os campos nome, email e senha
        cy.get('#nome')
            .type(Cypress.env('nome'))
        cy.get('#email')
            .type(Cypress.env('email'))
        cy.get('#senha')
            .type(Cypress.env('senha'))

        //Clica em Cadastrar
        cy.contains('Cadastrar')
            .click()

        cy.get('.alert-success')
            .should('exist')
    })

    it('Tente realizar login com usuário sem cadastro', () => {
        //Preenche os campos email e senha inexistentes
        cy.get('#email')
            .type(Cypress.env('emailfake'))
        cy.get('#senha')
            .type(Cypress.env('senhafake'), { log: false })

        //Clica em Cadastrar
        cy.contains('Entrar').click()

        cy.get('.alert-danger')
            .should('exist')
    })

    it('Realize login com sucesso', () => {
        //Preenche os campos email e senha existentes
        cy.get('#email')
            .type(Cypress.env('email'))
        cy.get('#senha')
            .type(Cypress.env('senha'), { log: false })

        //Clica em Entrar
        cy.contains('Entrar')
            .click()

        cy.get('.alert-success')
            .should('exist')
    })
})