import React, { useContext } from 'react';
import ProjectContext from '../../context/projects/projectContex'
import TaskContext from '../../context/tasks/taskContext'

const Task = ({ task }) => {
    //project
    const projectsContext = useContext(ProjectContext)
    const { project } = projectsContext;

    //Extraemos project
    const [currentproject] = project

    //task
    const tasksContext = useContext(TaskContext)
    const { deleteTask, getTask, changeStateTask, saveCurrentTask } = tasksContext;
    //Functiom change state task
    const changeState = task => {
        if (task.state) {
            task.state = false
        } else {
            task.state = true
        }
        changeStateTask(task)
    }
    //Function update
    const selectedTask = task => {
        saveCurrentTask(task)
    }

    //Function delete
    const taskDelete = id => {
        deleteTask(id)
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
                    onClick={() => taskDelete(task.id)}
                >
                    Eliminar</button>
            </div>
        </li>
    );
}

export default Task;