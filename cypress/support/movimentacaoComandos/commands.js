
Cypress.Commands.add('novaMoviReceitaPago3', (dataTransacao1, dataPagamento1, descricao1, interessado1, valor1) => {
    cy.visit('https://seubarriga.wcaquino.me/')

    cy.contains('Criar Movimentação')
        .click()
    cy.get('#tipo')
        .select('Receita');
    cy.get('#data_transacao')
        .type(dataTransacao1)
    cy.get('#data_pagamento')
        .type(dataPagamento1)
    cy.get('#descricao')
        .type(descricao1)
    cy.get('#interessado')
        .type(interessado1)
    cy.get('#valor')
        .type(valor1)
    cy.get('#conta')
        .select('Conta 3');
    cy.get('#status_pago')
        .check()
    cy.contains('Salvar')
        .click()
})

Cypress.Commands.add('novaMoviReceitaPago4', (dataTransacao1, dataPagamento1, descricao1, interessado1, valor1) => {
    cy.visit('https://seubarriga.wcaquino.me/')

    cy.contains('Criar Movimentação')
        .click()
    cy.get('#tipo')
        .select('Receita');
    cy.get('#data_transacao')
        .type(dataTransacao1)
    cy.get('#data_pagamento')
        .type(dataPagamento1)
    cy.get('#descricao')
        .type(descricao1)
    cy.get('#interessado')
        .type(interessado1)
    cy.get('#valor')
        .type(valor1)
    cy.get('#conta')
        .select('Conta 4');
    cy.get('#status_pago')
        .check()
    cy.contains('Salvar')
        .click()
})

Cypress.Commands.add('novaMoviDespesaPendente3', (dataTransacao2, dataPagamento2, descricao2, interessado2, valor2) => {
    cy.visit('https://seubarriga.wcaquino.me/')

    cy.contains('Criar Movimentação')
        .click()
    cy.get('#tipo')
        .select('Despesa');
    cy.get('#data_transacao')
        .type(dataTransacao2)
    cy.get('#data_pagamento')
        .type(dataPagamento2)
    cy.get('#descricao')
        .type(descricao2)
    cy.get('#interessado')
        .type(interessado2)
    cy.get('#valor')
        .type(valor2)
    cy.get('#conta')
        .select('Conta 3');
    cy.get('#status_pendente')
        .check()
    cy.contains('Salvar')
        .click()
})

Cypress.Commands.add('novaMoviDespesaPendente4', (dataTransacao2, dataPagamento2, descricao2, interessado2, valor2) => {
    cy.visit('https://seubarriga.wcaquino.me/')

    cy.contains('Criar Movimentação')
        .click()
    cy.get('#tipo')
        .select('Despesa');
    cy.get('#data_transacao')
        .type(dataTransacao2)
    cy.get('#data_pagamento')
        .type(dataPagamento2)
    cy.get('#descricao')
        .type(descricao2)
    cy.get('#interessado')
        .type(interessado2)
    cy.get('#valor')
        .type(valor2)
    cy.get('#conta')
        .select('Conta 4');
    cy.get('#status_pendente')
        .check()
    cy.contains('Salvar')
        .click()
})

Cypress.Commands.add('novaMoviDataInvalida', (dataInvalida1, dataInvalida2, descricao1, interessado1, valor1) => {
    cy.visit('https://seubarriga.wcaquino.me/')

    cy.contains('Criar Movimentação')
        .click()
    cy.get('#tipo')
        .select('Receita');
    cy.get('#data_transacao')
        .type(dataInvalida1)
    cy.get('#data_pagamento')
        .type(dataInvalida2)
    cy.get('#descricao')
        .type(descricao1)
    cy.get('#interessado')
        .type(interessado1)
    cy.get('#valor')
        .type(valor1)
    cy.get('#conta')
        .select('Conta 3');
    cy.get('#status_pago')
        .check()
    cy.contains('Salvar')
        .click()
})

Cypress.Commands.add('novaMoviValorInvalido', (dataTransacao1, dataPagamento1, descricao1, interessado1, valorInvalido) => {
    cy.visit('https://seubarriga.wcaquino.me/')

    cy.contains('Criar Movimentação')
        .click()
    cy.get('#tipo')
        .select('Receita');
    cy.get('#data_transacao')
        .type(dataTransacao1)
    cy.get('#data_pagamento')
        .type(dataPagamento1)
    cy.get('#descricao')
        .type(descricao1)
    cy.get('#interessado')
        .type(interessado1)
    cy.get('#valor')
        .type(valorInvalido)
    cy.get('#conta')
        .select('Conta 3');
    cy.get('#status_pago')
        .check()
    cy.contains('Salvar')
        .click()
})
