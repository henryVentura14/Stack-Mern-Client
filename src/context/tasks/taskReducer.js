import {
  TASK_PROJECT,
  ADD_TASK,
  VALID_TASK,
  DELETE_TASK,
  CURRENT_TASK,
  UPDATE_TASK,
  CLEAN_TASK
} from '../../types'

export default (state, action) => {
  switch (action.type) {
    case TASK_PROJECT:
      return {
        ...state,
        taskprojects: action.payload
      }
    case ADD_TASK:
      return {
        ...state,
        taskprojects: [...state.taskprojects, action.payload],
        errortask: false
      }
    case VALID_TASK:
      return {
        ...state,
        errortask: true
      }
    case DELETE_TASK:
      return {
        ...state,
        taskprojects: state.taskprojects.filter(
          task => task._id !== action.payload
        )
      }
    case UPDATE_TASK:
      return {
        ...state,
        taskprojects: state.taskprojects.map(task =>
          task._id === action.payload._id ? action.payload : task
        )
      }
    case CURRENT_TASK:
      return {
        ...state,
        selectedtask: action.payload
      }
    case CLEAN_TASK:
      return {
        ...state,
        selectedtask: null
      }
    default:
      return state
  }
}
