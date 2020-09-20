import React, { useReducer } from 'react'
import ProjectContext from './projectContex'
import ProjectReducer from './projectReducer'
import axiosClient from '../../config/axios'

import {
  FORM_PROJECT,
  GET_PROJECTS,
  ADD_PROJECT,
  VALID_FORM,
  CURRENT_PROJECT,
  DELETE_PROJECT,
  ERROR_PROJECT
} from '../../types'

const ProjectState = props => {
  const initialState = {
    projects: [],
    form: false,
    errorform: false,
    project: null,
    message: null
  }
  //dispatch
  const [state, dispatch] = useReducer(ProjectReducer, initialState)
  //Funciones
  const showForm = () => {
    dispatch({
      type: FORM_PROJECT
    })
  }
  //Obtener proyectos
  const getProjects = async () => {
    try {
      const result = await axiosClient.get('/api/projects')
      dispatch({
        type: GET_PROJECTS,
        payload: result.data.projects
      })
    } catch (error) {
      const alert = {
        msg: 'Error',
        category: 'alert-error'
      }
      dispatch({
        type: ERROR_PROJECT,
        paylod: alert
      })
    }
  }
  //Agregar proyectos
  const addProject = async project => {
    try {
      const result = await axiosClient.post('/api/projects', project)
      //insert project
      dispatch({
        type: ADD_PROJECT,
        payload: result.data
      })
    } catch (error) {
      const alert = {
        msg: 'Error',
        category: 'alert-error'
      }
      dispatch({
        type: ERROR_PROJECT,
        paylod: alert
      })
    }
  }
  //VALID FORM
  const showError = () => {
    dispatch({
      type: VALID_FORM
    })
  }
  //SELECT PROJECT
  const currentProject = projectId => {
    dispatch({
      type: CURRENT_PROJECT,
      payload: projectId
    })
  }
  //DELETE PROJECT
  const deleteProject = async projectId => {
    try {
      await axiosClient.delete(`/api/projects/${projectId}`)
      dispatch({
        type: DELETE_PROJECT,
        payload: projectId
      })
    } catch (error) {
      const alert = {
        msg: 'Error',
        category: 'alert-error'
      }
      dispatch({
        type: ERROR_PROJECT,
        paylod: alert
      })
    }
  }

  return (
    <ProjectContext.Provider
      value={{
        form: state.form,
        projects: state.projects,
        errorform: state.errorform,
        project: state.project,
        message: state.message,
        addProject,
        deleteProject,
        currentProject,
        getProjects,
        showForm,
        showError
      }}
    >
      {props.children}
    </ProjectContext.Provider>
  )
}

export default ProjectState
