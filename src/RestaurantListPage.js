import React, { Component } from 'react'
import NewRestaurentForm from './NewRestaurentForm'
import RestaurantList from './RestaurantList'
import {
    Button,
    Col, Row
} from "react-materialize";
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
            <Row>
                <Button
                    data-test="addRetaurantButton" onClick={this.handleAddRestaurantButtonClick} >
                    Add  Restaurant
            </Button>
            </Row>
            <Row>
                {(showNewRestaurantForm) ?
                    <NewRestaurentForm onSave={this.handleAddRestaurent} />
                    : <></>}
            </Row>
            <Row>
                <RestaurantList restaurants={RestaurantNames} />
            </Row>
        </div>
    }
}