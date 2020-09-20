import React, { Fragment, useContext } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import ProjectContext from '../../context/projects/projectContex'
import TaskContext from '../../context/tasks/taskContext'
import Task from './Task'

const ListTask = () => {

    const projectsContext = useContext(ProjectContext)
    const { project, deleteProject } = projectsContext;
    //context task
    const tasksContext = useContext(TaskContext)
    const { taskprojects } = tasksContext;

    if (!project) return <h2>Selecto one project</h2>

    const [currentproject] = project

    const onClickDelete = () => {
        deleteProject(currentproject._id)
    }
    return (
        <Fragment>
            <h2>Project: {currentproject.name}</h2>
            <ul className="list-task">
                {
                    taskprojects.length === 0
                        ? (<li className="task">No homework</li>)
                        :
                        <TransitionGroup>
                            {taskprojects.map(task => (
                                <CSSTransition
                                    key={task.id}
                                    timeout={200}
                                    classNames="task"
                                >
                                    <Task
                                        task={task}
                                    />
                                </CSSTransition>
                            ))}
                        </TransitionGroup>
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