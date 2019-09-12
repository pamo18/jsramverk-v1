import React, { Component } from 'react';
import DatePicker from './DatePicker.js';
import utils from '../../utils/utils.js';

class Register extends Component {
    constructor(props) {
        super(props);
        this.registerSubmit = this.registerSubmit.bind(this);
        this.state = {
            message: "",
            password: 0,
            showing: false
        };
    }
    registerSubmit(event) {
        // event.preventDefault();
        const data = new FormData(event.target);
        let name = data.get('name');
        if (localStorage.getItem(name) === null) {
            console.log("Setting up profile.")
            let person = {
                "Name": name,
                "Birthday": data.get('date'),
                "Country": data.get('country'),
                "Email": data.get('email'),
                "Password": data.get('password')
            }
            localStorage.setItem(name, JSON.stringify(person));
            console.log(JSON.parse(localStorage.getItem(name)));
        } else {
            console.log("Profile already added!")
        }
        localStorage.setItem("user", name);
        console.log(localStorage.getItem("user"));
        fetch('/api/register', {
            method: 'POST',
            body: data,
        });
    }
    addToCommon(e) {
        let common = [];
        let country = e.target.value;

        if (localStorage.getItem("common") === null) {
            console.log("Setting up localstorage.")
            localStorage.setItem("common", "");
        } else {
            console.log("Localstorage ready!")
        }

        if (localStorage.getItem("common")) {
            common = JSON.parse(localStorage.getItem("common"));
        }

        if (common.includes(country)) {
            console.log(country + " already exists.");
        } else {
            common.unshift(country);
            if (common.length > 3) {
                common.pop();
            }
            localStorage.setItem("common", JSON.stringify(common));
            console.log(country + " added!");
            console.log(localStorage.getItem("common"));
        }
        // localStorage.clear();
    }
    commonCountries() {
        let common = [];
        if (localStorage.getItem("common")) {
            let countries = common = JSON.parse(localStorage.getItem("common"));
             countries.forEach(function(country) {
                common.push(
                    <option value={country}>{country}</option>
                )
            });
        }
        return common;
    };
    getCountries() {
        let countries = [];
        utils.countryList().forEach(function(country) {
            countries.push(<option key={country} value={country}>{country}</option>);
        });
        return countries;
    }
    onChange = e => this.setState({ [e.target.name]: utils.passwordChecker(e.target.value) })


    render() {
        const { showing } = this.state;
        return (
            <div className="form-wrapper">
                <h1>Registration</h1>
                <p className="center">To be able to view your profile you must first register.</p>
                <form action="/profile" className="form-register" onSubmit={this.registerSubmit}>
                        <label className="form-label">Name
                            <input className="form-input" type="text" name="name" required placeholder="Your name" />
                        </label>

                        <label className="form-label">Birthday
                            <input onClick={() => this.setState({ showing: !showing })} id="birthday" className="form-input" type="date" name="date" required placeholder="Click to choose!" />
                            { showing
                                ? <DatePicker />
                                : null
                            }
                        </label>

                        <label className="form-label">Country
                            <select onChange={this.addToCommon} className="form-input" type="text" name="country" required placeholder="Your current location">
                                <optgroup label="Common countries">
                                    { this.commonCountries() }
                                </optgroup>
                                <optgroup label="Other countries">
                                    { this.getCountries() }
                                </optgroup>
                            </select>
                        </label>

                        <label className="form-label">Email
                            <input className="form-input" type="email" name="email" required placeholder="abc@mail.com" />
                        </label>

                        <label className="form-label">Password: 1 capital letter, 1 number, 4+ characters long.
                            <input className="form-input" onChange={this.onChange} type="password" name="password" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{4,}" required placeholder="Your password" />
                        </label>

                        <label className="form-label">Password strength
                            <meter className="form-meter" min="0" low="4" optimum="9" high="8" max="10" value={this.state.password}></meter>
                        </label>

                        <label className="form-label check-label">
                            <input className="check-input" type="checkbox" name="gdpr" required />
                            I agree to the <a href="https://en.wikipedia.org/wiki/Terms_of_service">Terms and Conditions</a>
                        </label><br />


                        <input className="button form-button center" type="submit" name="register" value="Register" />
                </form>
            </div>
        );
    }
}

export default Register;
