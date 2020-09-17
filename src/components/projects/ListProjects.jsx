import React, { useContext, useEffect } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import Project from './Project'
import ProjectContext from '../../context/projects/projectContex'

const ListProjects = () => {
    //extraemos proyectos del state principal
    const projectsContext = useContext(ProjectContext)
    const { projects, getProjects } = projectsContext;

    useEffect(() => {
        getProjects();
        // eslint-disable-next-line
    }, []);

    if (projects.length === 0) return null;
    return (
        <ul className="list-projects">
            <TransitionGroup>
                {projects.map(project => (
                    <CSSTransition  
                    key={project.id}
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