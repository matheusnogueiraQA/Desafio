describe('Acesse Criar Movimentação', () => {
    beforeEach(() => {
    cy.login()
    cy.visit('https://seubarriga.wcaquino.me')
    })

    it.only('Criar no mínimo 2 movimentações', ()=> {
        //Movimentação 1
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
            cy.get('#conta').select('Banco 3');

            //Clica em Cadastrar
            cy.contains('Salvar')
            .click()

            cy.get('.alert-success')
            .should('exist')
        
        // Movimentação 2
                //Clica em Criar Movimentação        
                cy.contains('Criar Movimentação')
                .click()

                //Clica em Tipo e Despesa
                cy.get('#tipo').select('Despesa');

                //Preenche Data de Movimentação
                cy.get('#data_transacao')
                .type(Cypress.env('data_transacao2'))

                //Preenche Data do Pagamento
                cy.get('#data_pagamento')
                .type(Cypress.env('data_pagamento2'))

                //Preenche Descrição
                cy.get('#descricao')
                .type(Cypress.env('descricao2'))

                //Preenche Interessado
                cy.get('#interessado')
                .type(Cypress.env('interessado2'))

                //Preenche Valor
                cy.get('#valor')
                .type(Cypress.env('valor2'))

                //Clica em conta
                cy.get('#conta').select('Banco 3');

                //Clica em Cadastrar
                cy.contains('Salvar')
                .click()

                cy.get('.alert-success')
                .should('exist')
    })

})