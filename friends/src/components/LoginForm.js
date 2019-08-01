import React from 'react';
import { connect } from 'react-redux';



class LoginForm extends React.Component {
    state = {
        credentials: {
            username: "",
            password: ""
        }
    };

    render() {
        return (
            <div className="login-form">
                <h1>Login Form</h1>
                <input
                    type="text"
                    name="username"
                    placeholder="Username"
                    />
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    />
                    <button>Update List</button>
            </div>
        );
    }
}
