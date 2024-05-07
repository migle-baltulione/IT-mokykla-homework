/// <reference types = "cypress" />

describe('Uploading files', () => {
  beforeEach(() => {
    cy.visit('https://itmokykla.lt/testing/six.html');
  })

  it('Upload PNG file', () => {
    cy.get('.tui-image-editor-header .tui-image-editor-load-btn').selectFile('cypress/fixtures/images/png-pic.png');
    cy.get('.tui-image-editor-canvas-container').should('have.css', 'max-width', '700px').and('have.css', 'max-height', '350px');
  });

  it('Upload JPEG file', () => {
    cy.get('.tui-image-editor-header .tui-image-editor-load-btn').selectFile('cypress/fixtures/images/jpeg-pic.jpg');
    cy.get('.tui-image-editor-canvas-container').should('have.css', 'max-width', '640px').and('have.css', 'max-height', '407px');
  });

  it('Download image', () => {
    //TODO
  });
});