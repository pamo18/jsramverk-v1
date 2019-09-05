import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from '../page/Header.js';
import Me from '../page/Me.js';
import Report from '../page/Report.js';
import Footer from '../page/Footer.js';

import './App.css';

class App extends Component {
    render() {
        return (
            <Router>
                <div className="App">
                    <Header />
                    <div className="wrap-main">
                      <main>
                          <Route exact path="/" component={Me} />
                          <Route path="/reports/week/:kmom" component={Report} />
                      </main>
                    </div>
                    <Footer />
                </div>
            </Router>
        );
    }
}

export default App;
