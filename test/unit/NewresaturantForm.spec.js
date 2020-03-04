import React from 'react'
import { mount } from "enzyme";
import NewRestaurentForm from "../../src/NewRestaurentForm";

describe("NewRestaurentForm", () => {
    describe("clicking Saeve button", () => {
        it("calls the onSave handler", () => {
            const savehandler = jest.fn();
            var wrapper = mount(<NewRestaurentForm onSave={savehandler} />);
            wrapper
                .find('input[data-test="newRestaurantName"]')
                .simulate('change', { target: { value: 'Sushi Place' } });
            wrapper
                .find('button[data-test="SaveNewRetaurantButton"]')
                .simulate('click');

            expect(savehandler)
                .toHaveBeenCalledWith('Sushi Place');
        })

    })

})