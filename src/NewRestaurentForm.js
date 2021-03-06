import React, { Component } from 'react'
import { Button, TextInput, Row, Col } from "react-materialize";
export default class NewRestaurentForm extends Component {
    state = { inputText: '' };
    handleTextChange = (event) => {
        this.setState({ inputText: event.target.value });
    }
    handleSave = (e) => {
        e.preventDefault();
        const { inputText } = this.state;
        const { onSave } = this.props;
        onSave(inputText);
        this.setState({ inputText: '' })
    }

    render() {
        const { inputText } = this.state;
        return <Row>
            <Col s={12} l={8} l={10}>
                <TextInput
                    label="Restaurant name"
                    onChange={this.handleTextChange}
                    value={inputText}
                    data-test="newRestaurantName">
                </TextInput>
            </Col>
            <Col s={12} l={4} l={2}>
                <Row> <Button
                    modal="close"
                    onClick={this.handleSave}
                    data-test="SaveNewRetaurantButton">
                    Save
            </Button></Row>

                <Row> <Button
                    style={{ backgroundColor: '#FF3377' }}
                    modal="close"
                    data-test="CancelSaveNewRetaurantButton">
                    Cancel
            </Button></Row>
            </Col>
        </Row >
    }
}

