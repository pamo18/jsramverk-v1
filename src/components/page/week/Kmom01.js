import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown/with-html';

const mdReadme = require('../../../assets/markdown/README.md');

class Kmom01 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            markdown: ""
        };
    }

    componentDidMount() {
        fetch(mdReadme)
        .then(response => {
            return response.text()
        })
        .then(text => {
            this.setState({
            markdown: text
            })
        })
      }
    render() {
        return (
            <div>
                <h4>Denna sida är skapad med ramverket React.</h4>
                <p><a href="https://github.com/pamo18/jsramverk-v1">Min GitHub Repot</a></p>
                <p><a href="https://github.com/emilfolino/jsramverk">Kursens GitHub Repot</a></p>
                <h2>README contents</h2>
                <ReactMarkdown source={ this.state.markdown} escapeHtml={false} />
            </div>
        );
    }
}

export default Kmom01;
