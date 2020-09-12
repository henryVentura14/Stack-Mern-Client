import React, { useContext, useEffect } from 'react';
import Project from './Project'
import projectContext from '../../context/projects/projectContex'

const ListProjects = () => {
    //extraemos proyectos del state principal
    const projectsContext = useContext(projectContext)
    const { projects, getProjects } = projectsContext;

    useEffect(() => {
        getProjects();
    }, []);

    if (projects.length === 0) return null;
    return (
        <ul className="list-projects">
            {projects.map(project => (
                <Project key={project.id} project={project} />
            ))}
        </ul>
    );
}

export default ListProjects;