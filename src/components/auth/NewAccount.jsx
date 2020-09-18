import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom'
import AlertContext from '../../context/alert/alertContext'

const NewAccount = () => {

    //CONTEXT
    const alertContext = useContext(AlertContext)
    const { alert, showAlert } = alertContext

    //ESTATE
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
        if (name.trim() === '' || email.trim() === '' || password.trim() === '' || confirm.trim() === '') {
            showAlert('All fields are required', 'alert-error')
            return
        }
        if (password.length < 6) {
            showAlert('Password must include at least 6 characters', 'alert-error')
            return
        }
        if(password!==confirm){
            showAlert('Password don`t match', 'alert-error')
            return
        }

    }
    return (
        <div className="form-user">
            {alert ? (<div className={`alert ${alert.category}`}>{alert.message}</div>) : null}
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