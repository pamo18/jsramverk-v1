import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Kmom01 from '../page/week/Kmom01.js';
import Kmom02 from '../page/week/Kmom02.js';
import Kmom03 from '../page/week/Kmom03.js';
import Kmom04 from '../page/week/Kmom04.js';
import Kmom05 from '../page/week/Kmom05.js';
import Kmom06 from '../page/week/Kmom06.js';
import Kmom10 from '../page/week/Kmom10.js';

const json = require('../../assets/json/report.json');

class Report extends Component {
    constructor(props) {
        super(props);
        this.state = {
            reports: json
        };
    }

    render() {
        let currentPage;
        let text = [];
        try {
            currentPage = this.props.match.params.kmom;
            text = this.state.reports.filter(r => r.week === currentPage);
        }
        catch(err) {
            console.log(err);
        }

        const renderedReport = text.map((week, index) => {
            switch(currentPage) {
                case "1":
                    return (
                        <div className="report" key={index}>
                            <h2>{ week.title }</h2>
                            <Kmom01 />
                        </div>
                    )
                case "2":
                    return (
                        <div className="report" key={index}>
                            <h2>{ week.title }</h2>
                            <Kmom02 />
                        </div>
                    )
                case "3":
                    return (
                        <div className="report" key={index}>
                            <h2>{ week.title }</h2>
                            <Kmom03 />
                        </div>
                    )
                case "4":
                    return (
                        <div className="report" key={index}>
                            <h2>{ week.title }</h2>
                            <Kmom04 />
                        </div>
                    )
                case "5":
                    return (
                        <div className="report" key={index}>
                            <h2>{ week.title }</h2>
                            <Kmom05 />
                        </div>
                    )
                case "6":
                    return (
                        <div className="report" key={index}>
                            <h2>{ week.title }</h2>
                            <Kmom06 />
                        </div>
                    )
                case "10":
                    return (
                        <div className="report" key={index}>
                            <h2>{ week.title }</h2>
                            <Kmom10 />
                        </div>
                    )
                default:
                    console.log("Not a valid week!");
            }
            return null;
        });

        return (
            <main>
                <nav className="navbar_main under">
                    <ul>
                        <li><NavLink to={{
                            pathname: "/reports/week/1",
                            state: { kmom: "1" }
                        }} activeClassName="selected">Kmom01</NavLink></li>
                        <li><NavLink to={{
                            pathname: "/reports/week/2",
                            state: { kmom: "2" }
                        }} activeClassName="selected">Kmom02</NavLink></li>
                        <li><NavLink to={{
                            pathname: "/reports/week/3",
                            state: { kmom: "3" }
                        }} activeClassName="selected">Kmom03</NavLink></li>
                        <li><NavLink to={{
                            pathname: "/reports/week/4",
                            state: { kmom: "4" }
                        }} activeClassName="selected">Kmom04</NavLink></li>
                        <li><NavLink to={{
                            pathname: "/reports/week/5",
                            state: { kmom: "5" }
                        }} activeClassName="selected">Kmom05</NavLink></li>
                        <li><NavLink to={{
                            pathname: "/reports/week/6",
                            state: { kmom: "6" }
                        }} activeClassName="selected">Kmom06</NavLink></li>
                        <li><NavLink to={{
                            pathname: "/reports/week/10",
                            state: { kmom: "10" }
                        }} activeClassName="selected">Kmom07-10</NavLink></li>
                    </ul>
                </nav>
                { renderedReport }
            </main>
        );
    }
  }

  export default Report;
