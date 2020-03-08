import React from 'react'
import { mount } from "enzyme";
import NewRestaurentForm from "../../src/NewRestaurentForm";

describe("NewRestaurentForm", () => {
    describe("clicking Saeve button", () => {
        it("calls the onSave handler", () => {
            const savehandler = jest.fn();
            var wrapper = mount(<NewRestaurentForm onSave={savehandler} />);
            const newRestaurantField = wrapper
                .find('input[data-test="newRestaurantName"]');
            newRestaurantField
                .simulate('change', { target: { value: 'Sushi Place' } });
            wrapper
                .find('button[data-test="SaveNewRetaurantButton"]')
                .simulate('click');

            expect(savehandler)
                .toHaveBeenCalledWith('Sushi Place');
            expect(wrapper
                .find('input[data-test="newRestaurantName"]').props().value)
                .toBe('');
        })

    })

})