import React, { Component } from 'react'
import NewRestaurentForm from './NewRestaurentForm'
import RestaurantList from './RestaurantList'
import { Button } from "react-materialize";
export default class RestaurantListPage extends Component {
    state = {
        RestaurantNames: [],
        showNewRestaurantForm: false,
    }
    handleAddRestaurent = (newRestaurantName) => {
        this.setState({
            showNewRestaurantForm: false,
            RestaurantNames: [...this.state.RestaurantNames, newRestaurantName]
        });
    }
    handleAddRestaurantButtonClick = (e) => {
        e.preventDefault();
        this.setState({ showNewRestaurantForm: true });
    }

    render() {
        const { RestaurantNames, showNewRestaurantForm } = this.state;
        return <div>
            <Button
                data-test="addRetaurantButton" onClick={this.handleAddRestaurantButtonClick} >
                Add  Restaurant
            </Button>
            {(showNewRestaurantForm) ?
                <NewRestaurentForm onSave={this.handleAddRestaurent} />
                : <></>}
            <RestaurantList restaurants={RestaurantNames} />
        </div>
    }
}