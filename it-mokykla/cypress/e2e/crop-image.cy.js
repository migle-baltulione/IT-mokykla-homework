/// <reference types = "cypress" />

describe('Testing cropping image', () => {
    beforeEach(() => {
        cy.visit('https://itmokykla.lt/testing/six.html');
        cy.get('#tie-btn-crop').click();
    })

    it('Crop square shape', () => {
        cy.get('.preset-square').click();
        cy.get('.action .apply').click();
        cy.get('.tui-image-editor').should('have.css', 'width', '400px').and('have.css', 'height', '400px');

    });

    it('Crop 3:2 ratio', () => {
        cy.get('.preset-3-2').click();
        cy.get('.action .apply').click();
        cy.get('.tui-image-editor').should('have.css', 'width', '600px').and('have.css', 'height', '400px');
    });

    it('Crop 4:3 ratio', () => {
        cy.get('.preset-4-3').click();
        cy.get('.action .apply').click();
        cy.get('.tui-image-editor').should('have.css', 'width', '533px').and('have.css', 'height', '400px');
    });

    it('Crop 5:4 ratio', () => {
        cy.get('.preset-5-4').click();
        cy.get('.action .apply').click();
        cy.get('.tui-image-editor').should('have.css', 'width', '500px').and('have.css', 'height', '400px');
    });

    it('Crop 7:5 ratio', () => {
        cy.get('.preset-7-5').click();
        cy.get('.action .apply').click();
        cy.get('.tui-image-editor').should('have.css', 'width', '560px').and('have.css', 'height', '400px');
    });

    it('Crop 16:9 ratio', () => {
        cy.get('.preset-16-9').click();
        cy.get('.action .apply').click();
        cy.get('.tui-image-editor').should('have.css', 'width', '600px').and('have.css', 'height', '337px');
    });

    it('Crop custom size', () => {
        cy.get('.preset-none').click();
        cy.get(`.tui-image-editor-canvas-container`).trigger('mousedown', 'topLeft')
            .trigger('mousemove', { clientX: 387, clientY: 345 })
            .trigger('mouseup', { force: true })
        cy.get('.action .apply').click();
        cy.get('.tui-image-editor').should('have.css', 'width', '195px').and('have.css', 'height', '313px');
    });
});