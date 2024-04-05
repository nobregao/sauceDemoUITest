describe('Login no Sauce Labs', () => {
  beforeEach(() => {
    cy.restoreLocalStorage();
    Cypress.Cookies.preserveOnce('session_id', 'session-username');
  })
  afterEach(() => {
    cy.saveLocalStorage();
  });

  it('realizar login', () => {
    cy.visit('/');
    cy.get('[data-test="username"]').type('standard_user');
    cy.get('[data-test="password"]').type('secret_sauce');
    cy.get('[data-test="login-button"]').click();
  })

  //Adicionar produtos aos carrinho e clicar no carrinho
  it('adicionar produtos ao carrinho', () => {
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
    cy.get('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click();
    cy.get('.shopping_cart_link').click();
  })

  //Clicar no botão de Checkout
  it('realizar checkout', () => {
    cy.get('[data-test="checkout"]').click();
  })

  //Preencher os dados do Cliente e clicar em Continue
  it('informar dados do cliente', () => {
    cy.get('[data-test="firstName"]').type('Bárbara');
    cy.get('[data-test="lastName"]').type('Cabral');
    cy.get('[data-test="postalCode"]').type('88106518');
    cy.get('[data-test="continue"]').click();
  })

  //Verificar os dados de pagamento e finalizar
  it('verificar os dados de pagamento e finalizar', () => {
    cy.get('[data-test="finish"]').click()
  })

  //Verificar a Thank you Page e voltar para a Home
  it('finalizar e verificar pagina de confirmação', () => {
    cy.get('.complete-header').should('be.visible');
  })
})