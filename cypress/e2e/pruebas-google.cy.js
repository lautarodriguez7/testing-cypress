describe('Testeando Google', () => {
    it('Probando buscar algo en google', () => {
        cy.visit('http://www.google.com.ar')

        cy.title('eq', 'Google');
        cy.wait(1000);
        // cy.get('body > div.L3eUgb > div.o3j99.ikrT4e.om7nvf > form > div:nth-child(1) > div.A8SBwf > div.RNNXgb > div > div.a4bIc > input').type('Cypress en google'); PUEDE SER ASI, COPIANDO TODO EL SELECTOR
        cy.get('[name="q"]').type('Cypress{enter}');  
        cy.get('#rso > div:nth-child(1) > div > div > div > div > div > div > div.yuRUbf > a').click();
        // cy.get('#page-content').type({pageDown})
    })

    it.only('Probando buscar algo en google', () => { //El only es para que solamente comience el testing del only
        cy.visit('http://www.google.com.ar')

        cy.title('eq', 'Google');
        cy.wait(1000);
        // cy.get('body > div.L3eUgb > div.o3j99.ikrT4e.om7nvf > form > div:nth-child(1) > div.A8SBwf > div.RNNXgb > div > div.a4bIc > input').type('Cypress en google'); PUEDE SER ASI, COPIANDO TODO EL SELECTOR
        cy.get('[name="q"]').type('Boca Juniors{enter}');  
        cy.get('[href="https://www.bocajuniors.com.ar/"] > .LC20lb').click();
        // cy.get('#rso > div:nth-child(1) > div > div > div > div > div > div > div.yuRUbf > a').click();
    })
})