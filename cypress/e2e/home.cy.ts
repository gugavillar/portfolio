describe('Portfolio tests', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('should page have email button with mailto', () => {
    cy.get('[data-cy="email"]').should(
      'have.attr',
      'href',
      Cypress.env('URL_EMAIL'),
    )
  })

  it('should page have github button', () => {
    cy.get('[data-cy="github"]').should(
      'have.attr',
      'href',
      Cypress.env('URL_GITHUB'),
    )
  })

  it('should page have download button', () => {
    cy.get('[data-cy="download"]').should(
      'have.attr',
      'href',
      Cypress.env('URL_RESUME'),
    )
  })

  it('should page have link to LinkedIn', () => {
    cy.get('[data-cy="linkedin"]').should(
      'have.attr',
      'href',
      Cypress.env('URL_LINKEDIN'),
    )
  })

  it('should have css classes when initial render', () => {
    cy.get('[data-cy="experience-0"]').should(
      'have.class',
      'bg-dark-600 max-lg:border-b-2 border-brand lg:border-l-2',
    )
  })

  it('should have css classes when experience clicked', () => {
    cy.get('[data-cy="experience-1"]')
      .click()
      .should(
        'have.class',
        'bg-dark-600 max-lg:border-b-2 border-brand lg:border-l-2',
      )
  })
})
