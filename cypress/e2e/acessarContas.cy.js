describe('Acessar Contas', () => {
    beforeEach(() => {
    cy.login()
    cy.visit('https://seubarriga.wcaquino.me')
    })
    
    it('Adicionar duas contas', ()=> {
        //Clica em Adicionar Contas
        cy.contains('Contas')
        .click()
        cy.contains('Adicionar')
        .click()

        // Cria uma conta Banco 1
        cy.get('#nome')
        .type(Cypress.env('conta1'))
        cy.contains('Salvar')
        .click()

        cy.get('.alert-success')
        .should('exist')

        //Clica em Adicionar Contas
        cy.contains('Contas')
        .click()
        cy.contains('Adicionar')
        .click()

        // Cria uma conta Banco 2
        cy.get('#nome')
        .type(Cypress.env('conta2'))
        cy.contains('Salvar')
        .click()

        cy.get('.alert-success')
        .should('exist')
    })

    it('Listar todas as contas', ()=> {
        //Clica em Listar Contas
        cy.contains('Contas')
        .click()
        cy.contains('Listar')
        .click()

        cy.get('#tabelaContas')
        .should('exist')
    })

    it('Alterar o nome das contas', ()=> {
        //Clica em Listar Contas
        cy.contains('Contas')
        .click()
        cy.contains('Listar')
        .click()

        //Clica em Editar Conta 1
        cy.get('.glyphicon-edit')
        .eq(0)
        .click()

        //Apaga o campo Nome e preenche
        cy.get('#nome')
        .clear()
        .type(Cypress.env('conta3'))

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
        .type(Cypress.env('conta4'))

        //Clica em Salvar
        cy.contains('Salvar')
        .click()

        cy.get('.alert-success')
        .should('exist')
    })

    it('Tente excluir uma conta que esteja vinculada a uma movimentação', ()=> {
            //Clica em Criar Movimentação
            cy.contains('Criar Movimentação')
                .click()

            //Clica em Tipo e Receita
            cy.get('#tipo').select('Receita');

            //Preenche Data de Movimentação
            cy.get('#data_transacao')
                .type(Cypress.env('data_transacao1'))

            //Preenche Data do Pagamento
            cy.get('#data_pagamento')
                .type(Cypress.env('data_pagamento1'))

            //Preenche Descrição
            cy.get('#descricao')
                .type(Cypress.env('descricao1'))

            //Preenche Interessado
            cy.get('#interessado')
                .type(Cypress.env('interessado1'))

            //Preenche Valor
            cy.get('#valor')
                .type(Cypress.env('valor1'))

            //Clica em conta
            cy.get('#conta').select('Conta 3');

            //Clica em Cadastrar
            cy.contains('Salvar')
                .click()

            cy.get('.alert-success')
                .should('exist')

            //Clica em Listar Contas
            cy.contains('Contas')
            .click()
            cy.contains('Listar')
            .click()

            //Clica em Excluir Conta 3
            cy.get('.glyphicon-remove-circle')
            .eq(0)
            .click()

            cy.get('.alert-danger')
            .should('exist')            
    })

    it('Tente adicionar uma conta com o nome já existente', ()=> {
        //Clica em Adicionar Contas
        cy.contains('Contas')
        .click()
        cy.contains('Adicionar')
        .click()

        // Tenta criar uma conta Banco 4
        cy.get('#nome')
        .type(Cypress.env('conta4'))
        cy.contains('Salvar')
        .click()

        cy.get('.alert-danger')
        .should('exist')
    })
})