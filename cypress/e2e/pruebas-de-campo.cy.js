describe('Prueba de campos', () => {
    it('Esta es una prueba de campo', () => {
        cy.visit('https://testingqarvn.com.es/prueba-de-campos-checkbox/')

        cy.wait(1000);
        cy.get('#wsf-1-field-29').type('Lautaro');
        cy.wait(1000);
        cy.get('#wsf-1-field-30').type('Rodriguez');
        cy.wait(1000);
        cy.get('#wsf-1-field-31').type('LRodriguez@gmail.com');
        cy.wait(1000);
        cy.get('#wsf-1-field-32').type(234523523);
        cy.wait(1000);
        cy.get('#wsf-1-field-33').type('direccion totally');
        
        cy.wait(1000);
        cy.get('#wsf-1-label-36-row-3').click();
        cy.wait(2000);
        cy.get('#wsf-1-field-34').click();
    })
})