describe('Acesse Criar Movimentação', () => {
    let dataUsuario
    let dataMovi

    beforeEach(() => {
        cy.fixture('usuario').then((tData) => {
            dataUsuario = tData
        })
        cy.fixture('movimentacao').then((tData) => {
            dataMovi = tData
        })
    })
    //Login
    beforeEach(() => {
        cy.login(dataUsuario.email, dataUsuario.senha)
    })

    it('Crie duas movimentações', () => {
        cy.novaMoviReceitaPago3(dataMovi.dataTransacao1, dataMovi.dataPagamento1, dataMovi.descricao1, dataMovi.interessado1, dataMovi.valor1)
        cy.get('.alert-success')
            .should('exist')
        cy.novaMoviDespesaPendente3(dataMovi.dataTransacao2, dataMovi.dataPagamento2, dataMovi.descricao2, dataMovi.interessado2, dataMovi.valor2)
        cy.get('.alert-success')
            .should('exist')
    })

    it('Crie duas movimentações para cada conta', () => {
        cy.novaMoviReceitaPago4(dataMovi.dataTransacao1, dataMovi.dataPagamento1, dataMovi.descricao1, dataMovi.interessado1, dataMovi.valor1)
        cy.get('.alert-success')
            .should('exist')
        cy.novaMoviDespesaPendente4(dataMovi.dataTransacao2, dataMovi.dataPagamento2, dataMovi.descricao2, dataMovi.interessado2, dataMovi.valor2)
        cy.get('.alert-success')
            .should('exist')
    })

    it('Crie duas movimentações para cada situação;', () => {
        cy.novaMoviReceitaPago3(dataMovi.dataTransacao1, dataMovi.dataPagamento1, dataMovi.descricao1, dataMovi.interessado1, dataMovi.valor1)
        cy.get('.alert-success')
            .should('exist')
        cy.novaMoviDespesaPendente4(dataMovi.dataTransacao2, dataMovi.dataPagamento2, dataMovi.descricao2, dataMovi.interessado2, dataMovi.valor2)
        cy.get('.alert-success')
            .should('exist')
    })

    it('Crie duas movimentações para meses diferentes;', () => {
        cy.novaMoviReceitaPago3(dataMovi.dataTransacao1, dataMovi.dataPagamento1, dataMovi.descricao1, dataMovi.interessado1, dataMovi.valor1)
        cy.get('.alert-success')
            .should('exist')
        cy.novaMoviDespesaPendente3(dataMovi.dataTransacao2, dataMovi.dataPagamento2, dataMovi.descricao2, dataMovi.interessado2, dataMovi.valor2)
        cy.get('.alert-success')
            .should('exist')
    })

    it('Tente criar movimentação com os campos de data inválidos', () => {
        cy.novaMoviDataInvalida(dataMovi.dataInvalida1, dataMovi.dataInvalida2, dataMovi.descricao1, dataMovi.interessado1, dataMovi.valor1)
        cy.get('.alert-danger')
            .should('exist')
    })

    it('Tente criar movimentação com o campo valor inválido', () => {
        cy.novaMoviValorInvalido(dataMovi.dataTransacao1, dataMovi.dataPagamento1, dataMovi.descricao1, dataMovi.interessado1, dataMovi.valorInvalido)
        cy.get('.alert-danger')
            .should('exist')
    })
})