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
    message: null,
    loading: true
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
  // AUTENTICAR USUARIO
  const authUser = async () => {
    const token = localStorage.getItem('token')
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
  //CERRAR SESSION
  const closeSession = () => {
    dispatch({
      type: CLOSE_SESSION
    })
  }
  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        auth: state.auth,
        message: state.message,
        token: state.token,
        loading: state.loading,
        signupUser,
        loginUser,
        authUser,
        closeSession
      }}
    >
      {props.children}
    </AuthContext.Provider>
  )
}

export default AuthState
