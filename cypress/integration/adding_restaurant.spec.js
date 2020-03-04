describe("adding a restaurant", () => {
    const restaurantName = "Sushi Place";

    it('displays the restaurant inthe list ', () => {
        cy.visit("localhost:1234");
        cy.get('[data-test="addRetaurantButton"]').click();
        cy.get('[data-test="newRestaurantName"]').type(restaurantName);
        cy.get('[data-test="SaveNewRetaurantButton"]').click();

        cy.contains(restaurantName);
    });

})