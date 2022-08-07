describe('Tipos de clicks', () => {
    it('probando click force', () => {
        cy.visit('https://www.google.com.ar')
        cy.get('[name="q"]').type('Boca Juniors{enter}');  
        cy.get('[href="https://www.bocajuniors.com.ar/"] > .LC20lb').click({force: true});
    })

    it.only('probando click x-y', () => {
        cy.visit('https://www.google.com.ar')
        cy.get('[name="q"]').type('Boca Juniors{enter}');  
        cy.get('.haz7je').should('be.visible').click(50,5) //(x,y)
    })
})