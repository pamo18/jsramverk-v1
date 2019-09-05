import React, { Component } from 'react';

class Kmom04 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message: "Kmom04 kommer snart"
        };
    }

    render() {
        return (
            <p>{ this.state.message }</p>
        );
    }
}

export default Kmom04;
