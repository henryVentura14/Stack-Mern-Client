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
        message: null,
        loading: false
      }
    case GET_USER:
      return {
        ...state,
        auth: true,
        loading: false,
        user: action.payload
      }
    case ERROR_SIGNUP:
    case ERROR_LOGIN:
    case CLOSE_SESSION:
      localStorage.removeItem('token')
      return {
        ...state,
        token: null,
        user: null,
        auth: null,
        loading: false,
        message: action.payload
      }
    default:
      return state
  }
}
