describe('Portfolio tests', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('should page have menu', () => {
    cy.contains('Sobre mim').should('be.visible').click()
    cy.url().should('eq', 'http://localhost:3000/#about')
    cy.get('#projects').should('be.visible')
  })

  it('should page have actions buttons with correct link', () => {
    cy.getBySelector('email').should(
      'have.attr',
      'href',
      Cypress.env('URL_EMAIL'),
    )

    cy.getBySelector('github')
      .invoke('removeAttr', 'target')
      .should('have.attr', 'href', Cypress.env('URL_GITHUB'))
      .click()
    cy.origin(Cypress.env('URL_GITHUB'), () => {
      cy.url().should('eq', Cypress.env('URL_GITHUB'))
    })

    cy.visit('/')

    cy.getBySelector('download').should(
      'have.attr',
      'href',
      Cypress.env('URL_RESUME'),
    )

    cy.getBySelector('linkedin').should(
      'have.attr',
      'href',
      Cypress.env('URL_LINKEDIN'),
    )
  })

  it('should have css classes when initial render and when click in other experience', () => {
    cy.getBySelector('experience-0').should(
      'have.class',
      'bg-dark-600 max-lg:border-b-2 border-brand lg:border-l-2',
    )
    cy.contains('Frontend Developer React').should('be.visible')

    cy.getBySelector('experience-2')
      .click()
      .should(
        'have.class',
        'bg-dark-600 max-lg:border-b-2 border-brand lg:border-l-2',
      )

    cy.contains('Coordenador de TI').should('be.visible')
  })

  it('should change language', () => {
    cy.get('.flex-col > div.flex > .flex > :nth-child(2) > a').click()

    cy.url().should('eq', 'http://localhost:3000/en-us')
  })
})
