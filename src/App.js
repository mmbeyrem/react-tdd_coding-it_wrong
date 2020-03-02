import React from 'react'

export default class App extends React.Component {
    state = {
        beyrem: "yes"
    };
    render() {
        return <div className='hello'>  Hello word {this.state.beyrem}  </div>;
    }

}