import React, { useContext, useEffect } from 'react'
import { Route, Redirect } from 'react-router-dom'
import AuthContext from '../../context/auth/authContext'

const PrivateRoute = ({ component: Component, ...props }) => {
    //context auth
    const authContext = useContext(AuthContext)
    const { loading, auth, authUser } = authContext
    //USE EFFECT
    useEffect(() => {
        authUser()
    }, [])
    return (
        <Route {...props} render={props => !auth && !loading
            ? (
                <Redirect to="/" />
            )
            : (
                <Component {...props} />
            )}
        />
    );
}
export default PrivateRoute