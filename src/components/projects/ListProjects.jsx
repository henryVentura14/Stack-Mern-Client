import React, { useContext, useEffect } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import Project from './Project'
import ProjectContext from '../../context/projects/projectContex'
import AlertContext from '../../context/alert/alertContext'

const ListProjects = () => {
    //extraemos proyectos del state principal
    const projectsContext = useContext(ProjectContext)
    const { message, projects, getProjects } = projectsContext;
    //extraemos las alertas
    const alertContext = useContext(AlertContext)
    const { alert, showAlert } = alertContext;

    useEffect(() => {
        //si hay un error, mostrar
        if (message) {
            showAlert(message.msg, message.category)
        }
        getProjects();
        // eslint-disable-next-line
    }, [message]);

    if (projects.length === 0) return null;
    return (
        <ul className="list-projects">
            {alert ? <div className={`alert ${alert.category}`}>{alert.msg}</div> : null}
            <TransitionGroup>
                {projects.map(project => (
                    <CSSTransition
                        key={project._id}
                        timeout={200}
                        classNames="project"
                    >
                        <Project project={project} />
                    </CSSTransition>
                ))}
            </TransitionGroup>
        </ul>
    );
}

export default ListProjects;