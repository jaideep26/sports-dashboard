describe("Home Page", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("loads the 7-day schedule", () => {
    cy.get('[data-testid="ArrowBackIcon"]');
    cy.get('[data-testid="ArrowForwardIcon"]');

    cy.get("#schedule-dates-group").children().first().as("firstDate");

    cy.get("@firstDate").should("have.class", "Mui-selected"); //the first date should always be selected by default

    //The number of games listed in the first date should equal the number of game cards displayed
    cy.get("@firstDate")
      .find("#number-of-games")
      .invoke("text")
      .then((text) => {
        const numberOfGames = parseInt(text.split(" ")[0]);
        cy.get("#game-cards-list")
          .children()
          .should("have.length", numberOfGames);
      });
  });

  it("renders an empty game cards list when a date is not selected", () => {
    cy.get("#schedule-dates-group").children().first().click().as("firstDate");
    cy.get("@firstDate").should("not.have.class", "Mui-selected"); //the first date should be toggled off after clicking
    cy.get("#game-cards-list").children().should("have.length", 0);
  });
});
