import { faker } from '@faker-js/faker'
const Faker = require('faker')

describe('Login', () => {
    let data;

    beforeEach(() => {
        cy.fixture('usuario').then((tData) => {
            data = tData;
            cy.log(data.email)
            cy.log(data.senha)
        })
    })

    it('Crie um novo usuário com sucesso', () => {
        const senha = faker.internet.password(10)
        cy.novoUsuario(faker.name.fullName(), faker.internet.email(), senha)
        cy.get('.alert-success')
            .should('exist')
    })

    it('Tente realizar login com usuário sem cadastro', () => {
        const senha = faker.internet.password(10)
        cy.login(faker.internet.email(), senha)

        cy.get('.alert-danger')
            .should('exist')
    })

    it('Realize login com sucesso', () => {
        cy.login(data.email, data.senha)

        cy.get('.alert-success')
            .should('exist')
    })
})