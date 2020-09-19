import React, { useReducer } from 'react'
import axiosClient from '../../config/axios'
import authToken from '../../config/token'
import AuthContext from './authContext.js'
import AuthReducer from './authReducer'
import {
  SUCCESS_SIGNUP,
  SUCCESS_LOGIN,
  ERROR_LOGIN,
  ERROR_SIGNUP,
  CLOSE_SESSION,
  GET_USER
} from '../../types'

const AuthState = props => {
  const initialState = {
    token: localStorage.getItem('token'),
    auth: null,
    user: null,
    message: null
  }

  //dispatch
  const [state, dispatch] = useReducer(AuthReducer, initialState)

  //functions
  // REGISTRO DE USUARIO

  const signupUser = async data => {
    try {
      const response = await axiosClient.post('/api/users', data)
      dispatch({
        type: SUCCESS_SIGNUP,
        payload: response.data
      })
      //get user
      authUser()
    } catch (error) {
      const alert = {
        message: error.response.data.msg,
        category: 'alert-error'
      }
      dispatch({
        type: ERROR_SIGNUP,
        payload: alert
      })
    }
  }
  // LOGIN DE USUARIO
  const loginUser = async data => {
    try {
      const response = await axiosClient.post('/api/auth', data)
      dispatch({
        type: SUCCESS_LOGIN,
        payload: response.data
      })
      //get user
      authUser()
    } catch (error) {
      const alert = {
        message: error.response.data.msg,
        category: 'alert-error'
      }
      dispatch({
        type: ERROR_LOGIN,
        payload: alert
      })
    }
  }
  // AUTENTICAR USUARIO
  const authUser = async () => {
    const token = localStorage.getItem('')
    if (token) {
      authToken(token)
    }
    try {
      const response = await axiosClient.get('/api/auth')
      dispatch({
        type: GET_USER,
        payload: response.data.user
      })
    } catch (error) {
      dispatch({
        type: ERROR_LOGIN
      })
    }
  }
  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        auth: state.auth,
        message: state.message,
        token: state.token,
        signupUser,
        loginUser
      }}
    >
      {props.children}
    </AuthContext.Provider>
  )
}

export default AuthState
