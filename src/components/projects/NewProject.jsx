import React, { Fragment, useState, useContext } from 'react';
import projectContext from '../../context/projects/projectContex'

const NewProject = () => {

    const projectsContext = useContext(projectContext)
    const {
        form,
        errorform,
        showForm,
        addProject,
        showError
    } = projectsContext;

    const [project, setProject] = useState({
        name: ''
    })
    const { name } = project;
    const onChangeProject = e => {
        setProject({
            ...project,
            [e.target.name]: e.target.value
        })
    }
    const onSubmitProject = e => {
        e.preventDefault();
        //validacion
        if (name === '') {
            showError();
            return;
        }
        // agegar al state
        addProject(project);
        // reiniciar
        setProject({
            name: ''
        })
    }
    return (
        <Fragment>
            <button
                type="button"
                className="btn btn-block btn-primary"
                onClick={() => showForm()}
            >
                New Project
            </button>
            {
                form
                    ? (
                        <form
                            onSubmit={onSubmitProject}
                            className="new-project-form">
                            <input
                                type="text"
                                name="name"
                                id="project"
                                placeholder="Name of project"
                                className="input-text"
                                value={name}
                                onChange={onChangeProject}
                            />
                            <input
                                type="submit"
                                className="btn btn-primary btn-block"
                                value="Add project"
                            />
                        </form>)
                    : null}
            {errorform ? <p className="message error">The name project is required</p> : null}
        </Fragment>
    );
}

export default NewProject;