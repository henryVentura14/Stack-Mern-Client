import React, { useReducer } from 'react'
import TaskContext from './taskContext'
import TaskReducer from './taskReducer'
import axiosClient from '../../config/axios'

import {
  TASK_PROJECT,
  ADD_TASK,
  VALID_TASK,
  DELETE_TASK,
  CURRENT_TASK,
  UPDATE_TASK,
  CLEAN_TASK
} from '../../types'

const TaskState = props => {
  const initialState = {
    taskprojects: [],
    errortask: false,
    selectedtask: null
  }
  //dispatch
  const [state, dispatch] = useReducer(TaskReducer, initialState)
  //FUNCIONES

  //OBTENER LAS TAREAS
  const getTask = async project => {
    try {
      const result = await axiosClient.get('/api/task', {
        params: { project }
      })
      dispatch({
        type: TASK_PROJECT,
        payload: result.data.task
      })
    } catch (error) {
      console.log(error)
    }
  }
  //AGREGAR LAS TAREAS
  const addTask = async task => {
    try {
      const result = await axiosClient.post('/api/task', task)
      console.log(result)
      dispatch({
        type: ADD_TASK,
        payload: task
      })
    } catch (error) {
      console.log(error)
    }
  }
  //VALIDAR LAS TAREAS
  const validTask = () => {
    dispatch({
      type: VALID_TASK
    })
  }
  //ELMINAR TAREAS
  const deleteTask = async (id, project) => {
    try {
      await axiosClient.delete(`/api/task/${id}`, { params: { project } })
      dispatch({
        type: DELETE_TASK,
        payload: id
      })
    } catch (error) {}
  }
  //UPDATE TASK
  const updateTask = async task => {
    try {
      const result = await axiosClient.put(`/api/task/${task._id}`, task)
      dispatch({
        type: UPDATE_TASK,
        payload: result.data.task
      })
    } catch (error) {
      console.log(error)
    }
  }
  
  //EDITAR TAREA
  const saveCurrentTask = task => {
    dispatch({
      type: CURRENT_TASK,
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
        taskprojects: state.taskprojects,
        selectedtask: state.selectedtask,
        addTask,
        cleanTask,
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
