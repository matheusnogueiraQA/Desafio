describe('Acessar Contas', () => {
    let dataUsuario;
    let dataConta
    beforeEach(() => {
        cy.fixture('usuario').then((tData) => {
            dataUsuario = tData;
        })
        cy.fixture('conta').then((tData) => {
            dataConta = tData;
        })
    })
    //Login
    beforeEach(() => {
        cy.login(dataUsuario.email, dataUsuario.senha)
    })

    it('Adicione duas contas', () => {
        cy.novaConta1(dataConta.conta1)
        cy.get('.alert-success')
            .should('exist')
        cy.novaConta1(dataConta.conta2)
        cy.get('.alert-success')
            .should('exist')
    })

    it('Liste todas as contas', () => { 
        cy.listarContas()
        cy.get('#tabelaContas')
            .should('exist')
    })

    it.o('Altere o nome das contas', () => {
        cy.listarContas()
        cy.editarContas(dataConta.conta3,dataConta.conta4)

        cy.get('.alert-success')
            .should('exist')
    })

    it('Tente excluir uma conta que esteja vinculada a uma movimentação', () => {
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

    it('Tente adicionar uma conta com o nome já existente', () => {
        cy.novaConta4(dataConta.conta4)
        cy.get('.alert-danger')
            .should('exist')
    })
})