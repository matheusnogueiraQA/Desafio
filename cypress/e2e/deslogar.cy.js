describe('Deslogar', () => {
    beforeEach(() => {
        cy.login()
        cy.visit('https://seubarriga.wcaquino.me')
    })

    it('Deslogue', () => {
        //Clica em Sair
        cy.contains('Sair')
            .click()

        cy.url()
            .should('be.equal', 'https://seubarriga.wcaquino.me/logout')
    })
})