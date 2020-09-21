import React, { useReducer } from 'react'
import ModalContext from './modalContext'
import ModalReducer from './modalReducer'
import { MODAL_SHOW, MODAL_HIDE } from '../../types'

const ModalState = props => {
  const initialState = {
    modal: null
  }

  //dispatch
  const [state, dispatch] = useReducer(ModalReducer, initialState)

  //functions
  const showModal = (content, type, idTask, idProject) => {
    dispatch({
      type: MODAL_SHOW,
      payload: { content, type, idTask, idProject }
    })
  }
  const hideModal = () => {
    dispatch({
      type: MODAL_HIDE
    })
  }

  return (
    <ModalContext.Provider
      value={{
        modal: state.modal,
        showModal,
        hideModal
      }}
    >
      {props.children}
    </ModalContext.Provider>
  )
}

export default ModalState
