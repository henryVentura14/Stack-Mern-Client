import {
  SUCCESS_SIGNUP,
  SUCCESS_LOGIN,
  ERROR_LOGIN,
  ERROR_SIGNUP,
  CLOSE_SESSION,
  GET_USER
} from '../../types'

export default (state, action) => {
  switch (action.type) {
    case SUCCESS_LOGIN:
    case SUCCESS_SIGNUP:
      localStorage.setItem('token', action.payload.token)
      return {
        ...state,
        auth: true,
        message: null
      }
    case ERROR_SIGNUP:
    case ERROR_LOGIN:
      localStorage.removeItem('token')
      return {
        ...state,
        token: null,
        message: action.payload
      }
    case GET_USER:
      return {
        ...state,
        usuer: action.payload
      }
    case CLOSE_SESSION:
      return {
        alert: null
      }
    default:
      return state
  }
}
