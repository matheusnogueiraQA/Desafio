describe('Acesse Criar Movimentação', () => {
    beforeEach(() => {
        cy.login()
        cy.visit('https://seubarriga.wcaquino.me')
    })

    it('Criar 2 movimentações', () => {
        //Movimentação 1 RECEITA
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

        //Movimentação 2 DESPESA
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
            cy.get('#conta').select('Conta 3');

            //Clica em Cadastrar
            cy.contains('Salvar')
                .click()

            cy.get('.alert-success')
                .should('exist')
    })

    it('Criar 2 movimentações para cada conta', () => {
        //Movimentação 1 RECEITA
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
            cy.get('#conta').select('Conta 4');

            //Clica em Cadastrar
            cy.contains('Salvar')
                .click()

            cy.get('.alert-success')
                .should('exist')

        //Movimentação 2 DESPESA
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
            cy.get('#conta').select('Conta 4');

            //Clica em Cadastrar
            cy.contains('Salvar')
                .click()

            cy.get('.alert-success')
                .should('exist')
    })

    it('Criar 2 movimentações para cada situação;', () => {
        //Movimentação 1 RECEITA PAGO
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

            //Marca o checkbox Pago
            cy.get('#status_pago')
                .check()

            //Clica em conta
            cy.get('#conta').select('Conta 3');

            //Clica em Cadastrar
            cy.contains('Salvar')
                .click()

            cy.get('.alert-success')
                .should('exist')

        //Movimentação 2 DESPESA PENDENTE
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

            //Marca o checkbox Pago
            cy.get('#status_pendente')
                .check()

            //Clica em conta
            cy.get('#conta').select('Conta 4');

            //Clica em Cadastrar
            cy.contains('Salvar')
                .click()

            cy.get('.alert-success')
                .should('exist')
    })

    it('Criar 2 movimentações para meses diferentes;', () => {
        //Movimentação 1 RECEITA PAGO Mês 10
            //Clica em Criar Movimentação
            cy.contains('Criar Movimentação')
                .click()

            //Clica em Tipo e Receita
            cy.get('#tipo').select('Receita');

            //Preenche Data de Movimentação
            cy.get('#data_transacao')
                .type(Cypress.env('data_transacao3'))

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

            //Marca o checkbox Pago
            cy.get('#status_pago')
                .check()

            //Clica em conta
            cy.get('#conta').select('Conta 3');

            //Clica em Cadastrar
            cy.contains('Salvar')
                .click()

            cy.get('.alert-success')
                .should('exist')

        //Movimentação 2 DESPESA
            //Clica em Criar Movimentação        
            cy.contains('Criar Movimentação')
                .click()

            //Clica em Tipo e Despesa
            cy.get('#tipo').select('Despesa');

            //Preenche Data de Movimentação
            cy.get('#data_transacao')
                .type(Cypress.env('data_transacao4'))

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

            //Marca o checkbox Pago
            cy.get('#status_pendente')
                .check()

            //Clica em conta
            cy.get('#conta').select('Conta 4');

            //Clica em Cadastrar
            cy.contains('Salvar')
                .click()

            cy.get('.alert-success')
                .should('exist')
    })

    it('Tente criar movimentação com os campos de data inválidos', () => {
        //Movimentação 1 RECEITA
            //Clica em Criar Movimentação
            cy.contains('Criar Movimentação')
                .click()

            //Clica em Tipo e Receita
            cy.get('#tipo').select('Receita');

            //Preenche Data de Movimentação
            cy.get('#data_transacao')
                .type(Cypress.env('data_invalida1'))

            //Preenche Data do Pagamento
            cy.get('#data_pagamento')
                .type(Cypress.env('data_invalida4'))

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

            cy.get('.alert-danger')
                .should('exist')
    })

    it('Tente criar movimentação com o campo valor inválido', () => {
        //Movimentação 1 RECEITA
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
                .type(Cypress.env('valor_invalido'))

            //Clica em conta
            cy.get('#conta').select('Conta 3');

            //Clica em Cadastrar
            cy.contains('Salvar')
                .click()

            cy.get('.alert-danger')
                .should('exist')
    })
})