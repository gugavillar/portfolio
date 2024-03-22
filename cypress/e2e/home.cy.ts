describe('Portfolio tests', () => {
  it('should render page', () => {
    cy.visit('/')
  })

  it('should page have email button with mailto', () => {
    cy.visit('/')
    cy.get('[data-cy="email"]').should(
      'have.attr',
      'href',
      Cypress.env('URL_EMAIL'),
    )
  })

  it('should page have github button', () => {
    cy.visit('/')
    cy.get('[data-cy="github"]').should(
      'have.attr',
      'href',
      Cypress.env('URL_GITHUB'),
    )
  })

  it('should page have download button', () => {
    cy.visit('/')
    cy.get('[data-cy="download"]').should(
      'have.attr',
      'href',
      Cypress.env('URL_RESUME'),
    )
  })

  it('should page have link to LinkedIn', () => {
    cy.visit('/')
    cy.get('[data-cy="linkedin"]').should(
      'have.attr',
      'href',
      Cypress.env('URL_LINKEDIN'),
    )
  })
})
