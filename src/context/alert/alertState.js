import React, { useReducer } from 'react'
import AlertContext from './alertContext.js'
import AlertReducer from './alertReducer'
import { HIDE_ALERT, SHOW_ALERT } from '../../types'

const AlertState = props => {

  const initialState = {
    alert: null
  }

  //dispatch
  const [state, dispatch] = useReducer(AlertReducer, initialState)

  //functions
  const showAlert = (message, category) => {
    dispatch({
      type: SHOW_ALERT,
      payload: {
        message,
        category
      }
    })
    setTimeout(() => {
      dispatch({
        type: HIDE_ALERT
      })
    }, 5000)
  }

  return (
    <AlertContext.Provider
      value={{
        alert: state.alert,
        showAlert
      }}
    >
      {props.children}
    </AlertContext.Provider>
  )
}

export default AlertState
