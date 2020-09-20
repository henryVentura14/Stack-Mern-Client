import React, { useContext } from 'react';
import ProjectContext from '../../context/projects/projectContex'
import TaskContext from '../../context/tasks/taskContext'

const Project = ({ project }) => {
    //context project
    const projectsContext = useContext(ProjectContext)
    const { currentProject } = projectsContext;

    //context task
    const tasksContext = useContext(TaskContext)
    const { getTask } = tasksContext;

    //Functions
    const selectProject = id => {
        currentProject(id)
        getTask(id);
    }
    return (
        <li>
            <button
                type="button"
                className="btn btn-blank"
                onClick={() => selectProject(project._id)}
            >
                {project.name}
            </button>
        </li>
    );
}

export default Project;