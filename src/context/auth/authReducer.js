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
    case SUCCESS_SIGNUP:
      localStorage.setItem('token', action.payload.token)
      return {
        ...state,
        auth: true,
        message: null
      }
    case ERROR_SIGNUP:
      return {
        ...state,
        token: null,
        message: action.payload
      }
    case SUCCESS_LOGIN:
      return {
        alert: null
      }
    case ERROR_LOGIN:
      return {
        alert: null
      }
    case GET_USER:
      return {
        alert: null
      }
    case CLOSE_SESSION:
      return {
        alert: null
      }
    default:
      return state
  }
}
