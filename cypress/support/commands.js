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

Cypress.Commands.add('novaConta1', (conta1) => {
    cy.visit('https://seubarriga.wcaquino.me/')
    //Clica em Adicionar Contas
    cy.contains('Contas')
        .click()
    cy.contains('Adicionar')
        .click()
    //Adiciona nome
    cy.get('#nome')
        .type(conta1)
    //Clica em Salvar
    cy.contains('Salvar')
        .click()
})

Cypress.Commands.add('novaConta2', (conta2) => {
    cy.visit('https://seubarriga.wcaquino.me/')
    //Clica em Adicionar Contas
    cy.contains('Contas')
        .click()
    cy.contains('Adicionar')
        .click()
    //Adiciona nome
    cy.get('#nome')
        .type(conta2)
    //Clica em Salvar
    cy.contains('Salvar')
        .click()
})

Cypress.Commands.add('novaConta4', (conta4) => {
    cy.visit('https://seubarriga.wcaquino.me/')
    //Clica em Adicionar Contas
    cy.contains('Contas')
        .click()
    cy.contains('Adicionar')
        .click()
    //Adiciona nome
    cy.get('#nome')
        .type(conta4)
    //Clica em Salvar
    cy.contains('Salvar')
        .click()
})

Cypress.Commands.add('listarContas', () => {
    cy.visit('https://seubarriga.wcaquino.me/')
    // Clica em Listar Contas
    cy.contains('Contas')
        .click()
    cy.contains('Listar')
        .click()
})

Cypress.Commands.add('editarContas', (conta3, conta4) => {
    //Clica em Editar Conta 1
    cy.get('.glyphicon-edit')
        .eq(0)
        .click()

    //Apaga o campo Nome e preenche
    cy.get('#nome')
        .clear()
        .type(conta3)

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
        .type(conta4)

    //Clica em Salvar
    cy.contains('Salvar')
        .click()
})

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

