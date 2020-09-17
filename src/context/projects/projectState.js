import React, { useReducer } from 'react'
import { uuid } from 'uuidv4'
import ProjectContext from './projectContex'
import ProjectReducer from './projectReducer'
import {
  FORM_PROJECT,
  GET_PROJECTS,
  ADD_PROJECT,
  VALID_FORM,
  CURRENT_PROJECT,
  DELETE_PROJECT
} from '../../types'

const ProjectState = props => {
  const projects = [
    { id: 1, name: 'store' },
    { id: 2, name: 'e-comerce' },
    { id: 3, name: 'sell-car' }
  ]

  const initialState = {
    projects: [],
    form: false,
    errorform: false,
    project: null
  }
  //dispatch
  const [state, dispatch] = useReducer(ProjectReducer, initialState)
  const showForm = () => {
    dispatch({
      type: FORM_PROJECT
    })
  }

  const getProjects = () => {
    dispatch({
      type: GET_PROJECTS,
      payload: projects
    })
  }

  const addProject = project => {
    project.id = uuid
    //insert project
    dispatch({
      type: ADD_PROJECT,
      payload: project
    })
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
  const deleteProject = projectId => {
    dispatch({
      type: DELETE_PROJECT,
      payload: projectId
    })
  }

  return (
    <ProjectContext.Provider
      value={{
        form: state.form,
        projects: state.projects,
        errorform: state.errorform,
        project: state.project,
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
