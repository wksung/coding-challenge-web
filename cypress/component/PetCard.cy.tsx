import PetCard from "../../src/components/PetCard/PetCard";

const MockPetObject = [
    {
        "name": "Garfield",
        "type": "Cat"
    },
    {
        "name": "Jim",
        "type": "Cat"
    },
    {
        "name": "Max",
        "type": "Cat"
    },
    {
        "name": "Tom",
        "type": "Cat"
    }
]

describe('PetCard Component', () => {
    it('should show the pet gender as title', () => {
        cy.mount(<PetCard gender="Male" pets={ MockPetObject } />);
        cy.get(".PetCard .PetCard--heading").should('have.text', "Male");
    });

    it("should show the title as bolded text", () => {
        cy.mount(<PetCard gender="Male" pets={ MockPetObject } />);
        cy.get(".PetCard .PetCard--heading").should('have.css', "font-weight").and("eq", "700");
    });

    it("should have a divider", () => {
        cy.mount(<PetCard gender="Male" pets={ MockPetObject } />);
        cy.get(".PetCard").find("hr").should("have.length", 1);
    });

    it("should output a list of names", () => {
        cy.mount(<PetCard gender="Male" pets={ MockPetObject } />);
        cy.get(".PetCard").find(".PetCard--name").should("have.length", 4);
    });
});