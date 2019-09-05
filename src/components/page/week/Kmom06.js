import React, { Component } from 'react';

class Kmom06 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message: "Kmom06 kommer snart"
        };
    }

    render() {
        return (
            <p>{ this.state.message }</p>
        );
    }
}

export default Kmom06;
