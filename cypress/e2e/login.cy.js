
const Faker = require('faker')

describe('Login', () => {
    let data;

    beforeEach(() => {
        cy.fixture('usuario').then((tData) => {
            data = tData;
            cy.log(data.email)
            cy.log(data.senha)
        })
        cy.visit('https://seubarriga.wcaquino.me/login')
    })

    it('Crie um novo usuário com sucesso', () => {
       cy.login(data.nome, data.email, data.senha)
    })

    it('Tente realizar login com usuário sem cadastro', () => {
        //Preenche os campos email e senha inexistentes
        cy.get('#email')
            .type(data.email)
        cy.get('#senha')
            .type(data.senha), { log: false }

        //Clica em Cadastrar
        cy.contains('Entrar').click()

        cy.get('.alert-danger')
            .should('exist')
    })

    it.only('Realize login com sucesso', () => {
        //Preenche os campos email e senha existentes
        cy.login(data.email, data.senha)
    })
})