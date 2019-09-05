import React, { Component } from 'react';

class Kmom02 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message: "Kmom02 kommer snart"
        };
    }

    render() {
        return (
            <p>{ this.state.message }</p>
        );
    }
}

export default Kmom02;
