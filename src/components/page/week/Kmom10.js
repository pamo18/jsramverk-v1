import React, { Component } from 'react';

class Kmom10 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message: "Kmom07-10 kommer snart"
        };
    }

    render() {
        return (
            <p>{ this.state.message }</p>
        );
    }
}

export default Kmom10;
