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
        
    })

    it('Exclua uma movimentação', () => {
        //Clica em Resumo Mensal
        cy.contains('Resumo Mensal')
            .click()

        //Clica em Mês e Fevereiro
        cy.get('#mes').select('Fevereiro');

        //Clica em Ano e 2023
        cy.get('#ano').select('2023');

        //Clica em Cadastrar
        cy.contains('Buscar')

            .click()
        //Clica em Cadastrar
        cy.contains('Buscar')
            .click()

        //Clica em Excluir Movimentação
        cy.get('.glyphicon-remove-circle')
            .eq(5)
            .click()

        cy.get('.alert-success')
            .should('exist')
    })
})