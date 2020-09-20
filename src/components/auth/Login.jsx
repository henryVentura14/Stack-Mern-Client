import React, { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom'
import AlertContext from '../../context/alert/alertContext'
import AuthContext from '../../context/auth/authContext'

const Login = (props) => {

    //CONTEXT alert
    const alertContext = useContext(AlertContext)
    const { alert, showAlert } = alertContext
    //CONTEXT AUTH
    const authContext = useContext(AuthContext)
    const { message, auth, loginUser } = authContext

    //useEffect
    useEffect(() => {
        if (auth) {
            props.history.push('/projects')
        }
        if (message) {
            showAlert(message.message, message.category)
        }
        // eslint-disable-next-line
    }, [message, auth, props.history])
    const [user, saveUser] = useState({
        email: '',
        password: ''
    })

    const { email, password } = user

    const onChange = e => {
        saveUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }
    const onSubmit = e => {
        e.preventDefault();
        if (email.trim() === '' || password.trim() === '') {
            showAlert('All fields are required', 'alert-error')
        }
        loginUser({ email, password })
    }
    return (
        <div className="form-user">
            {alert ? (<div className={`alert ${alert.category}`}>{alert.message}</div>) : null}
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