import React, { Component } from 'react'
import { Button, TextInput } from "react-materialize";
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
    }

    render() {
        const { inputText } = this.state;
        return <form>
            <TextInput
                label="Restaurant name"
                onChange={this.handleTextChange}
                value={inputText}
                data-test="newRestaurantName">
            </TextInput>
            <Button onClick={this.handleSave}
                data-test="SaveNewRetaurantButton">
                Save
            </Button>
        </form>
    }
}

