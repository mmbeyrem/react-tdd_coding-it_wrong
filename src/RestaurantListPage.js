import React, { Component } from 'react'
import NewRestaurentForm from './NewRestaurentForm'
import RestaurantList from './RestaurantList'
export default class RestaurantListPage extends Component {
    state = {
        RestaurantNames: []
    }
    handleAddRestaurent = (newRestaurantName) => {
        this.setState({ RestaurantNames: [...this.state.RestaurantNames, newRestaurantName] });
    }
    render() {
        const { RestaurantNames } = this.state;
        return <div>
            <button data-test="addRetaurantButton">
                Add  Restaurant
            </button>
            <NewRestaurentForm onSave={this.handleAddRestaurent} />
            <RestaurantList restaurants={RestaurantNames} />
        </div>
    }
}