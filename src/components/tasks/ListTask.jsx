import React, { Fragment, useContext } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import ProjectContext from '../../context/projects/projectContex'
import TaskContext from '../../context/tasks/taskContext'
import ModalContext from '../../context/modal/modalContext'

import Task from './Task'

const ListTask = () => {
    //context prject
    const projectsContext = useContext(ProjectContext)
    const { project } = projectsContext;
    //context task
    const tasksContext = useContext(TaskContext)
    const { taskprojects } = tasksContext;
    //context modal
    const modalContext = useContext(ModalContext)
    const { showModal } = modalContext;

    if (!project) return <h2>Selecto one project</h2>

    const [currentproject] = project

    const onClickDelete = () => {
        showModal(currentproject.name, 'project', '', currentproject._id)
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
                                    key={task._id + task.name}
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
            >Delete project <i className="material-icons">delete</i></button>
        </Fragment>
    );
}

export default ListTask;