import { MODAL_SHOW, MODAL_HIDE } from '../../types'

export default (state, action) => {
  switch (action.type) {
    case MODAL_SHOW:
      return {
        ...state,
        modal: action.payload
      }
    case MODAL_HIDE:
      return {
        ...state,
        modal: null
      }

    default:
      return state
  }
}
