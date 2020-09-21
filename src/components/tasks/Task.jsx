import React, { useContext } from 'react';
import ProjectContext from '../../context/projects/projectContex'
import TaskContext from '../../context/tasks/taskContext'
import ModalContext from '../../context/modal/modalContext'

const Task = ({ task }) => {
    //project
    const projectsContext = useContext(ProjectContext)
    const { project } = projectsContext;

    //Extraemos project
    const [currentproject] = project

    //task
    const tasksContext = useContext(TaskContext)
    const { getTask, updateTask, saveCurrentTask } = tasksContext;
    //context modal
    const modalContext = useContext(ModalContext)
    const { showModal } = modalContext;
    //Functiom change state task
    const changeState = task => {
        if (task.state) {
            task.state = false
        } else {
            task.state = true
        }
        updateTask(task)
    }
    //Function update
    const selectedTask = task => {
        saveCurrentTask(task)
    }

    //Function delete
    const taskDelete = id => {
        showModal(task.name, 'task', id, currentproject._id)
        getTask(currentproject.id)
    }
    return (
        <li className="task showdow">
            <p>{task.name}</p>
            <div className="state">
                {
                    task.state
                        ? (<button
                            type="button"
                            onClick={() => changeState(task)}
                            className="complete">
                            Complete
                        </button>)
                        : (<button
                            type="button"
                            onClick={() => changeState(task)}
                            className="incomplete">
                            Incomplete
                        </button>)
                }
            </div>
            <div className="actions">
                <button
                    type="button"
                    className="btn btn-primary"
                    onClick={() => selectedTask(task)}
                >Editar
                </button>
                <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={() => taskDelete(task._id)}
                >
                    Eliminar</button>
            </div>
        </li>
    );
}

export default Task;