describe('Deslogar', () => {
    let dataUsuario;

    beforeEach(() => {
        cy.fixture('usuario').then((tData) => {
            dataUsuario = tData;
        })
    })

    it('Deslogue', () => {
        cy.login(dataUsuario.email, dataUsuario.senha)
        cy.deslogar()
        cy.url()
            .should('be.equal', 'https://seubarriga.wcaquino.me/logout')
    })
})