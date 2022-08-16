describe('Prueba 3 de select multiples', () => {
    it('Practica 1', () => {
        cy.visit('https://demo.seleniumeasy.com/jquery-dual-list-box-demo.html');
        cy.title().should('eq','Selenium Easy - JQuery Dual List Box Demo')

        cy.get(':nth-child(1) > .form-control').select(['Isis', 'Alice', 'Luiza', 'Giovanna', 'Helena', 'Beatriz']).then(() => {
            cy.wait(1000)
            cy.get('.pAdd').should('be.visible').click();
        })
        
        cy.wait(2000);
        cy.get(':nth-child(3) > .form-control').select(['Isis','Luiza','Helena']).then(() => {
            cy.wait(1000)
            cy.get('.pRemove').should('be.visible')
        })

    })
})