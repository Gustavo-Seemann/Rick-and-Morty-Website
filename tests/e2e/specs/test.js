// https://docs.cypress.io/api/table-of-contents

describe("Checks if general info is correct", () => {

  it('displays character count correctly', () => {
    cy.visit('/');
    cy.get('.statsCol').contains('Personagens').siblings('h2').should(($h2) => {
      expect($h2.text()).not.equal('0');
    });
  });

  it('displays locations count correctly', () => {
    cy.visit('/');
    cy.get('.statsCol').contains('Planetas').siblings('h2').should(($h2) => {
      expect($h2.text()).not.equal('0');
    });
  });

  it('displays episodes count correctly', () => {
    cy.visit('/');
    cy.get('.statsCol').contains('Episódios').siblings('h2').should(($h2) => {
      expect($h2.text()).not.equal('0');
    });
  });

  it('display stats correctly', () => {
    cy.visit('/');
    cy.get('.statsCol').should('be.visible');
    cy.get('.statsCol').contains('Personagens');
    cy.get('.statsCol').contains('Planetas');
    cy.get('.statsCol').contains('Episódios');
  });

});

describe("Checks if the page loads correctly.", () => {

  it('displays the right title', () => {
    cy.visit('/');
    cy.get('.title').should('have.text', ' Explore o Multiverso ');
  });

  it('loads the page properly', () => {
    cy.visit('/');
    cy.get('.home').should('be.visible');
  });

  it('displays character starting cards correctly', () => {
    cy.visit('/');
    cy.get('[data-testid="characterCardComp"]').should('have.length.gt', 0);
  });

});

describe("Check if the search is working correctly", () => {

  it('search for characters', () => {
    cy.visit('/');
    cy.get('input[type="search"]').type('Rick');
    cy.wait(1500);
    cy.get('.character-card').should('have.length.gt', 0);
  });

  it('displays right message when no results are found', () => {
    cy.visit('/');
    cy.get('input[type="search"]').type('PersonagemInexistente');
    cy.get('.search-btn').click();
    cy.contains('Nenhum resultado encontrado.').should('be.visible');
  });

  it('display loading properly', () => {
    cy.visit('/');
    cy.get('input[type="search"]').type('Rick');
    cy.get('.search-btn').click();
    cy.get('.spinner-border').should('be.visible');
  });

  it('display the character image', () => {
    cy.visit('/');
    cy.get('.character-card').first().find('.character-image').should('be.visible');
  });

  it('displays filter options correctly', () => {
    cy.visit('/');
    cy.get('.filterOptions').should('be.visible');
    cy.get('.filterOptions').contains('Todos');
    cy.get('.filterOptions').contains('Vivo');
    cy.get('.filterOptions').contains('Morto');
    cy.get('.filterOptions').contains('Desconhecido');
  });

});

describe("Check if pagination is working correctly", () => {

  it('display pagination correctly', () => {
    cy.visit('/');
    cy.get('[data-testid="paginationComp"]').should('be.visible');
  });

  it('navigate to the next page', () => {
    cy.visit('/');
    cy.get('.next-btn').first().click();
    cy.get('[data-testid="paginationComp"]').contains('Página 2');
    cy.get('.next-btn').first().click();
    cy.get('[data-testid="paginationComp"]').contains('Página 3');
  });

  it('navigate to previous page', () => {
    cy.visit('/');
    cy.get('.next-btn').first().click();
    cy.get('[data-testid="paginationComp"]').contains('Página 2');
    cy.get('.previous-btn').first().click();
    cy.get('[data-testid="paginationComp"]').contains('Página 1');
  });

});

describe("Checks if the CharacterCard component is working.", () => {
  it('displays character name correctly', () => {
    cy.searchForRick();
    cy.get('.character-card').find('h1').contains('Rick Sanchez');
  });

  it('displays character status correctly', () => {
    cy.searchForRick();
    cy.get('.filterOptions').select('Vivo');
    cy.get('.character-status').first().should('have.class', 'status-alive').and('have.text', 'Vivo');
  });

  it('displays character species correctly', () => {
    cy.searchForRick();
    cy.get('#character-species').should('have.text', 'Human');
  });

  it('displays characters last known location correctly', () => {
    cy.searchForRick();
    cy.get('#character-last-seen').should('have.text', 'Citadel of Ricks');
  });

  it('displays the name of the first viewed episode correctly', () => {
    cy.searchForRick();
    cy.get('#character-first-seen').should('have.text', 'Pilot');
  });

  it('check if it applies the correct color class to a living character', () => {
    cy.searchForRick();
    cy.get('.filterOptions').select('Vivo');
    cy.get('.character-status').should('have.class', 'status-alive');
  });

  it('check if it applies the correct color class to a dead character', () => {
    cy.searchForRick();
    cy.get('.filterOptions').select('Morto');
    cy.get('.character-status').should('have.class', 'status-dead');
  });

  it('check if it applies the correct color class for an unknown status', () => {
    cy.visit('/');
    cy.get('.filterOptions').select('Desconhecido');
    cy.get('.character-status').should('have.class', 'status-unknown');
  });
});
