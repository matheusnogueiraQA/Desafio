describe('Acesse Resumo Mensal', () => {
    
    let dataUsuario

    beforeEach(() => {
        cy.fixture('usuario').then((tData) => {
            dataUsuario = tData;
        })
    })
    //Login
    beforeEach(() => {
        cy.login(dataUsuario.email, dataUsuario.senha)
    })

    it('Filtre as movimentações criadas', () => {
        cy.filtraMovimentacao()
        cy.get('#tabelaExtrato')
            .should('be.visible')
    })

    it('Exclua uma movimentação', () => {
        cy.filtraMovimentacao()
        cy.deletaMovimentacao()
        cy.get('.alert-success')
            .should('exist')
    })
})