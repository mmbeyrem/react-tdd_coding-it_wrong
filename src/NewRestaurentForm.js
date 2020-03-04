import React, { Component } from 'react'

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
            <input
                type="text"
                onChange={this.handleTextChange}
                value={inputText}
                data-test="newRestaurantName">
            </input>
            <button onClick={this.handleSave}
                data-test="SaveNewRetaurantButton">
                Save
            </button>
        </form>
    }
}

