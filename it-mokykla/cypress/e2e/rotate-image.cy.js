/// <reference types = "cypress" />

describe('Testing image rotation', () => {
    beforeEach(() => {
        cy.visit('https://itmokykla.lt/testing/six.html');
        cy.get('#tie-btn-rotate').click();
    });

    it('Rotate image clockwise 30 degrees', () => {
        cy.get('.clockwise').click();
        cy.get('.lower-canvas').should('have.attr', 'width', '719').and('have.attr', 'height', '646');
    });

    it('Rotate image clockwise 60 degrees', () => {
        Cypress._.times(2, () => {
            cy.get('.clockwise').click();
        });
        cy.get('.lower-canvas').should('have.attr', 'width', '646').and('have.attr', 'height', '719');
    });

    it('Rotate image clockwise 90 degrees', () => {
        Cypress._.times(3, () => {
            cy.get('.clockwise').click();
        });
        cy.get('.lower-canvas').should('have.attr', 'width', '400').and('have.attr', 'height', '600');
    });

    it('Rotate image clockwise 120 degrees', () => {
        Cypress._.times(4, () => {
            cy.get('.clockwise').click();
        });
        cy.get('.lower-canvas').should('have.attr', 'width', '646').and('have.attr', 'height', '719');
    });

    it('Rotate image clockwise 150 degrees', () => {
        Cypress._.times(5, () => {
            cy.get('.clockwise').click();
        });
        cy.get('.lower-canvas').should('have.attr', 'width', '719').and('have.attr', 'height', '646');
    });

    it('Rotate image clockwise 180 degrees', () => {
        Cypress._.times(6, () => {
            cy.get('.clockwise').click();
        });
        cy.get('.lower-canvas').should('have.attr', 'width', '600').and('have.attr', 'height', '400');
    });

    it('Rotate image clockwise 210 degrees', () => {
        Cypress._.times(7, () => {
            cy.get('.clockwise').click();
        });
        cy.get('.lower-canvas').should('have.attr', 'width', '719').and('have.attr', 'height', '646');
    });

    it('Rotate image clockwise 240 degrees', () => {
        Cypress._.times(8, () => {
            cy.get('.clockwise').click();
        });
        cy.get('.lower-canvas').should('have.attr', 'width', '646').and('have.attr', 'height', '719');
    });

    it('Rotate image clockwise 270 degrees', () => {
        Cypress._.times(9, () => {
            cy.get('.clockwise').click();
        });
        cy.get('.lower-canvas').should('have.attr', 'width', '400').and('have.attr', 'height', '600');
    });

    it('Rotate image clockwise 300 degrees', () => {
        Cypress._.times(10, () => {
            cy.get('.clockwise').click();
        });
        cy.get('.lower-canvas').should('have.attr', 'width', '646').and('have.attr', 'height', '719');
    });

    it('Rotate image clockwise 330 degrees', () => {
        Cypress._.times(11, () => {
            cy.get('.clockwise').click();
        });
        cy.get('.lower-canvas').should('have.attr', 'width', '719').and('have.attr', 'height', '646');
    });

    it('Rotate image clockwise 360 degrees', () => {
        Cypress._.times(12, () => {
            cy.get('.clockwise').click();
        });
        cy.get('.lower-canvas').should('have.attr', 'width', '600').and('have.attr', 'height', '400');
    });

    it('Rotate image counterclockwise 30 degrees', () => {
        cy.get('.counterclockwise').click();
        cy.get('.lower-canvas').should('have.attr', 'width', '719').and('have.attr', 'height', '646');
    });

    it('Rotate image counterclockwise 60 degrees', () => {
        Cypress._.times(2, () => {
            cy.get('.counterclockwise').click();
        });
        cy.get('.lower-canvas').should('have.attr', 'width', '646').and('have.attr', 'height', '719');
    });

    it('Rotate image counterclockwise 90 degrees', () => {
        Cypress._.times(3, () => {
            cy.get('.counterclockwise').click();
        });
        cy.get('.lower-canvas').should('have.attr', 'width', '400').and('have.attr', 'height', '600');
    });

    it('Rotate image counterclockwise 120 degrees', () => {
        Cypress._.times(4, () => {
            cy.get('.counterclockwise').click();
        });
        cy.get('.lower-canvas').should('have.attr', 'width', '646').and('have.attr', 'height', '719');
    });

    it('Rotate image counterclockwise 150 degrees', () => {
        Cypress._.times(5, () => {
            cy.get('.counterclockwise').click();
        });
        cy.get('.lower-canvas').should('have.attr', 'width', '719').and('have.attr', 'height', '646');
    });

    it('Rotate image counterclockwise 180 degrees', () => {
        Cypress._.times(6, () => {
            cy.get('.counterclockwise').click();
        });
        cy.get('.lower-canvas').should('have.attr', 'width', '600').and('have.attr', 'height', '400');
    });

    it('Rotate image counterclockwise 210 degrees', () => {
        Cypress._.times(7, () => {
            cy.get('.counterclockwise').click();
        });
        cy.get('.lower-canvas').should('have.attr', 'width', '719').and('have.attr', 'height', '646');
    });

    it('Rotate image counterclockwise 240 degrees', () => {
        Cypress._.times(8, () => {
            cy.get('.counterclockwise').click();
        });
        cy.get('.lower-canvas').should('have.attr', 'width', '646').and('have.attr', 'height', '719');
    });

    it('Rotate image counterclockwise 270 degrees', () => {
        Cypress._.times(9, () => {
            cy.get('.counterclockwise').click();
        });
        cy.get('.lower-canvas').should('have.attr', 'width', '400').and('have.attr', 'height', '600');
    });

    it('Rotate image counterclockwise 300 degrees', () => {
        Cypress._.times(10, () => {
            cy.get('.counterclockwise').click();
        });
        cy.get('.lower-canvas').should('have.attr', 'width', '646').and('have.attr', 'height', '719');
    });

    it('Rotate image counterclockwise 330 degrees', () => {
        Cypress._.times(11, () => {
            cy.get('.counterclockwise').click();
        });
        cy.get('.lower-canvas').should('have.attr', 'width', '719').and('have.attr', 'height', '646');
    });

    it('Rotate image counterclockwise 360 degrees', () => {
        Cypress._.times(12, () => {
            cy.get('.counterclockwise').click();
        });
        cy.get('.lower-canvas').should('have.attr', 'width', '600').and('have.attr', 'height', '400');
    });

    it('Rotate image with range bar', () => {
        cy.get('#tie-rotate-range .tui-image-editor-virtual-range-pointer').trigger('mousedown')
        .trigger('mousemove', 'right')
        .trigger('mouseup');
        cy.get('.lower-canvas').should('have.attr', 'width', '708').and('have.attr', 'height', '602');
    });
});