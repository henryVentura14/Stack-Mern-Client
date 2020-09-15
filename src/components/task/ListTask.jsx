import React, { Fragment, useContext } from 'react';
import projectContext from '../../context/projects/projectContex'
import Task from './Task'

const ListTask = () => {

    const projectsContext = useContext(projectContext)
    const { project, deleteProject } = projectsContext;

    if(!project)return<h2>Selecto one project</h2>

    const [currentproject] = project

    const taskProject = [
        { name: "choose name", state: true },
        { name: "change variable", state: true },
        { name: "buy pc", state: false },
        { name: "build pc", state: false },
    ];
    const onClickDelete =()=>{
        deleteProject(currentproject.id)
    }
    return (
        <Fragment>
            <h2>Project: {currentproject.name}</h2>
            <ul className="list-task">
                {
                    taskProject.length === 0
                        ? (<li className="task">No homework</li>)
                        : taskProject.map(task => (
                            <Task
                                key={task.name}
                                task={task}
                            />
                        ))
                }
            </ul>
            <button
                className="btn btn-delete"
                type="button"
                onClick={onClickDelete}
            >Delete project &times;</button>
        </Fragment>
    );
}

export default ListTask;