import React, { useReducer } from 'react'
import { uuid } from 'uuidv4'
import projectContext from './projectContex'
import projectReducer from './projectReducer'
import { FORM_PROJECT, GET_PROJECTS, ADD_PROJECT } from '../../types'

const ProjectState = props => {
  const projects = [
    { id: 1, name: 'store' },
    { id: 2, name: 'e-comerce' },
    { id: 3, name: 'sell-car' }
  ]

  const initialState = {
    projects: [],
    form: false
  }
  //dispatch
  const [state, dispatch] = useReducer(projectReducer, initialState)
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
  return (
    <projectContext.Provider
      value={{
        form: state.form,
        projects: state.projects,
        addProject,
        getProjects,
        showForm
      }}
    >
      {props.children}
    </projectContext.Provider>
  )
}

export default ProjectState
