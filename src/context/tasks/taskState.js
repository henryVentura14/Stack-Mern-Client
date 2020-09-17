import React, { useReducer } from 'react'
import { uuid } from 'uuidv4'
import TaskContext from './taskContext'
import TaskReducer from './taskReducer'
import {
  TASK_PROJECT,
  ADD_TASK,
  VALID_TASK,
  DELETE_TASK,
  STATE_TASK,
  CURRENT_TASK,
  UPDATE_TASK,
  CLEAN_TASK
} from '../../types'

const TaskState = props => {
  const initialState = {
    tasks: [
      { id: 1, projectId: 1, name: 'create schemas database', state: false },
      { id: 2, projectId: 2, name: 'create designs e-comerce', state: true },
      { id: 3, projectId: 2, name: 'create backend e-comerce', state: false },
      { id: 4, projectId: 3, name: 'change variable', state: true },
      { id: 5, projectId: 2, name: 'choose name e-comerce', state: true },
      { id: 6, projectId: 3, name: 'create middleware e-comerce', state: false }
    ],
    taskprojects: null,
    errortask: false,
    selectedtask: null
  }
  //dispatch
  const [state, dispatch] = useReducer(TaskReducer, initialState)
  //FUNCIONES

  //OBTENER LAS TAREAS
  const getTask = projectId => {
    dispatch({
      type: TASK_PROJECT,
      payload: projectId
    })
  }
  //AGREGAR LAS TAREAS
  const addTask = task => {
    task.id = uuid
    dispatch({
      type: ADD_TASK,
      payload: task
    })
  }
  //VALIDAR LAS TAREAS
  const validTask = () => {
    dispatch({
      type: VALID_TASK
    })
  }
  //ELMINAR TAREAS
  const deleteTask = id => {
    dispatch({
      type: DELETE_TASK,
      payload: id
    })
  }
  //CHANGE STATE TAREAS
  const changeStateTask = task => {
    dispatch({
      type: STATE_TASK,
      payload: task
    })
  }
  //EDITAR TAREA
  const saveCurrentTask = task => {
    dispatch({
      type: CURRENT_TASK,
      payload: task
    })
  }
  //UPDATE TASK
  const updateTask = task => {
    dispatch({
      type: UPDATE_TASK,
      payload: task
    })
  }
  //CLEAN TASK
  const cleanTask = () => {
    dispatch({
      type: CLEAN_TASK
    })
  }
  return (
    <TaskContext.Provider
      value={{
        errortask: state.errortask,
        tasks: state.tasks,
        taskprojects: state.taskprojects,
        selectedtask: state.selectedtask,
        addTask,
        cleanTask,
        changeStateTask,
        deleteTask,
        getTask,
        validTask,
        saveCurrentTask,
        updateTask
      }}
    >
      {props.children}
    </TaskContext.Provider>
  )
}

export default TaskState
