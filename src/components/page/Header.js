import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/img/logo.jpg';

const json = require('../../assets/json/me.json');

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            course: ""
        };
    }
    componentDidMount() {
        let meText = json[0];
        this.setState({
            name: meText.name,
            course: meText.course
        });
    }

    render() {
        const checkActive = (match, location) => {
            if(!location) return false;
                const {pathname} = location;
            return pathname === "/";
        }

        const checkActiveReport = (match, location) => {
            if(!location) return false;
                const {pathname} = location;
                var splitLink = pathname.split("/")[1];
            return splitLink === "reports";
        }
        return (
            <header className="site-header">
                <img src={logo} className="logo" alt="logo" />
                <span className="site-title">{ this.state.course } Me-Sida för { this.state.name }</span>
                <nav className="navbar_main">
                    <ul>
                        <li><NavLink to="/" activeClassName="selected" isActive={checkActive}>Me</NavLink ></li>
                        <li><NavLink to={{pathname: "/reports/week/1", state: { kmom: "1" }}} activeClassName="selected" isActive={checkActiveReport}>Redovisning</NavLink></li>
                        <li><NavLink to="/register" activeClassName="selected">Register</NavLink ></li>
                        <li><NavLink to="/profile" activeClassName="selected">Profile</NavLink ></li>
                    </ul>
                </nav>
            </header>
        );
    }
}

export default Header;
