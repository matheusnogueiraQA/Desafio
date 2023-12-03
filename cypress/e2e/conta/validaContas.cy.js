describe('Acessar Contas', () => {

    let dataUsuario
    let dataConta
    let dataMovi

    beforeEach(() => {
        cy.fixture('usuario').then((tData) => {
            dataUsuario = tData;
        })
        cy.fixture('conta').then((tData) => {
            dataConta = tData;
        })
        cy.fixture('movimentacao').then((tData) => {
            dataMovi = tData;
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

    it('Altere o nome das contas', () => {
        cy.listarContas()
        cy.editarContas(dataConta.conta3, dataConta.conta4)

        cy.get('.alert-success')
            .should('exist')
    })

    it('Tente excluir uma conta que esteja vinculada a uma movimentação', () => {
        cy.novaMoviReceitaPago3(dataMovi.dataTransacao1, dataMovi.dataPagamento1, dataMovi.descricao1, dataMovi.interessado1, dataMovi.valor1)
        cy.listarContas()
        cy.excluirConta()
        
        cy.get('.alert-danger')
            .should('exist')
    })

    it('Tente adicionar uma conta com o nome já existente', () => {
        cy.novaConta4(dataConta.conta4)
        cy.get('.alert-danger')
            .should('exist')
    })
})