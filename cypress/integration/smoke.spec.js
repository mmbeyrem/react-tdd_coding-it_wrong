describe("smoke tests", () => {

    it("Makes sure the welcome message comes up !", () => {
        cy.visit('http://localhost:1234')
            .contains("Hello word");

    });


});