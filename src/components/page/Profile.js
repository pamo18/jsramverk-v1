import React, { Component } from 'react';

class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    getProfile() {
        if (localStorage.getItem("user")) {
            let details = [];
            let name = localStorage.getItem("user");
            let profile = [];
            profile = JSON.parse(localStorage.getItem(name));
            // eslint-disable-next-line no-unused-vars
            for (let key in profile) {
                details.push(
                    <h3 className="center">{key}: {profile[key]}</h3>
                )
            }
            return details;
        } else {
            return <h3 className="center">Your profile will be shown below when you register</h3> 
        }
    }

    render() {
        // localStorage.clear();
        console.log(localStorage);
        return (
            <article>
                <h1>Profile page</h1>
                { this.getProfile() }
            </article>
        );
    }
}

export default Profile;
