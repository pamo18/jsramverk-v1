import React, { Component } from 'react';

class Kmom05 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message: "Kmom05 kommer snart"
        };
    }

    render() {
        return (
            <p>{ this.state.message }</p>
        );
    }
}

export default Kmom05;
