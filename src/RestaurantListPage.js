import React, { Component } from 'react'
import NewRestaurentForm from './NewRestaurentForm'
import RestaurantList from './RestaurantList'
import {
    Button,
    Modal, Row
} from "react-materialize";
export default class RestaurantListPage extends Component {
    state = {
        RestaurantNames: [],
    }
    handleAddRestaurent = (newRestaurantName) => {
        this.setState({
            RestaurantNames: [...this.state.RestaurantNames, newRestaurantName]
        });
    }

    render() {
        const { RestaurantNames } = this.state;
        return <div>
            <Modal
                id=""
                actions={[]}
                header="Restaurant name"
                trigger={<Button data-test="addRetaurantButton"> Add  Restaurant</Button>}
            >
                <NewRestaurentForm onSave={this.handleAddRestaurent} />
            </Modal>
            <Row>
                <RestaurantList restaurants={RestaurantNames} />
            </Row>
        </div>
    }
}