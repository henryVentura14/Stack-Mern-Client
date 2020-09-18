import React, { useReducer } from 'react'
import axiosClient from '../../config/axios'
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
  const getUser = user => {
    dispatch({
      type: GET_USER,
      payload: user
    })
  }

  const signUp = async data => {
    try {
      const response = await axiosClient.post('/api/users', data)
      dispatch({
        type: SUCCESS_SIGNUP,
        payload: response.data
      })
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

  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        auth: state.auth,
        message: state.message,
        token: state.token,
        getUser,
        signUp
      }}
    >
      {props.children}
    </AuthContext.Provider>
  )
}

export default AuthState
