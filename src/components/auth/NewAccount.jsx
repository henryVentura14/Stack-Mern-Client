import React, { useState } from 'react';
import { Link } from 'react-router-dom'
const NewAccount = () => {

    const [user, saveUser] = useState({
        name: '',
        email: '',
        password: '',
        confirm: ''
    })

    const { name, email, password, confirm } = user

    const onChange = e => {
        e.preventDefault();
        saveUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }
    const onSubmit = e => {
        e.preventDefault();
        //validaciones
        

    }
    return (
        <div className="form-user">
            <div className="content-form shadow-darl">
                <h1>Create Account</h1>
                <form onSubmit={onSubmit}>
                    <div className="field-form">
                        <label htmlFor="name">Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Your name"
                            onChange={onChange}
                            value={name}
                        />
                    </div>
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
                        <label htmlFor="confirm">Repeat Password</label>
                        <input
                            type="password"
                            id="confirm"
                            name="confirm"
                            placeholder="Repeat password"
                            onChange={onChange}
                            value={confirm}
                        />
                    </div>
                    <div className="field-form">
                        <input className="btn btn-primary btn-block" value="Create user" type="submit" />
                    </div>
                </form>
                <Link to={'/'} className="link-account">Login</Link>
            </div>
        </div>
    );
}

export default NewAccount;