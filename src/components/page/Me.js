import React, { Component } from 'react';
import meImage from '../../assets/img/Paul-Moreland-2.jpg';
import meBackdrop from '../../assets/img/Manchester.jpg';

const json = require('../../assets/json/me.json');

class Me extends Component {
    constructor(props) {
        super(props);
        this.state = {
            para1: "",
            para2: "",
            para3: "",
        };
    }

    componentDidMount() {
        let meText = json[0];
        this.setState({
            para1: meText.para1,
            para2: meText.para2,
            para3: meText.para3
        });
    }

    render() {
        return (
            <article>
                <h1>Om Mig Själv</h1>

                <img src={meImage} className="me" alt="Bild på Paul Moreland" />

                <p>{ this.state.para1 }</p>
                <p>{ this.state.para2 }</p>
                <p>{ this.state.para3 }</p>

                <div className="backdrop"><img src={meBackdrop} className="Manchester" alt="Manchester" />St Peter's Square, Manchester</div>
            </article>
        );
    }
}

export default Me;
