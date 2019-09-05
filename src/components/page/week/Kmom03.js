import React, { Component } from 'react';

class Kmom03 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message: "Kmom03 kommer snart"
        };
    }

    render() {
        return (
            <p>{ this.state.message }</p>
        );
    }
}

export default Kmom03;
