import Feedback from "../../src/components/Feedback/Feedback"

describe('Feedback Component', () => {
    it('should have some feedback in the container box', () => {
        cy.mount(<Feedback type="loading">Loading...</Feedback>);
        cy.get(".Feedback").should("have.text", "Loading...");
    });

    it('should have a blue background for loading feedback', () => {
        cy.mount(<Feedback type="loading">Loading...</Feedback>);
        cy.get(".Feedback").should("have.css", "background-color").and("eq", "rgb(229, 246, 253)")
    });

    it('should have a red background for error feedback', () => {
        cy.mount(<Feedback type="error">Error fetching data...</Feedback>);
        cy.get(".Feedback").should("have.css", "background-color").and("eq", "rgb(253, 237, 237)")
    });
});