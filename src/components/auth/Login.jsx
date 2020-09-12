import React, { useState } from 'react';
import { Link } from 'react-router-dom'
const Login = () => {

    const [user, saveUser] = useState({
        email: '',
        password: ''
    })

    const { email, password } = user

    const onChange = e => {
        e.preventDefault();
        saveUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }
    const onSubmit = e => {
        e.preventDefault();
        console.log(e)
    }
    return (
        <div className="form-user">
            <div className="content-form shadow-darl">
                <h1>Login</h1>
                <form onSubmit={onSubmit}>
                    <div className="field-form">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Your email"
                            onChange={onChange}
                            value={email}
                        />
                    </div>
                    <div className="field-form">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Enter password"
                            onChange={onChange}
                            value={password}
                        />
                    </div>
                    <div className="field-form">
                        <input className="btn btn-primary btn-block" value="Start session" type="submit" />
                    </div>
                </form>
                <Link to={'/new-account'} className="link-account">Create account</Link>
            </div>
        </div>
    );
}

export default Login;