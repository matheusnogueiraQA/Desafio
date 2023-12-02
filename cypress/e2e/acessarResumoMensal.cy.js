describe('Acesse Resumo Mensal', () => {
    beforeEach(() => {
        cy.login()
        cy.visit('https://seubarriga.wcaquino.me')
    })

    it('Filtre as movimentações criadas', () => {
        //Clica em Resumo Mensal
        cy.contains('Resumo Mensal')
            .click()

        //Clica em Mês e Fevereiro
        cy.get('#mes').select('Fevereiro');

        //Clica em Ano e 2023
        cy.get('#ano').select('2023');

        //Clica em Buscar
        cy.contains('Buscar')
            .click()

        cy.get('tbody tr')
            .should('have.length', 7)
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