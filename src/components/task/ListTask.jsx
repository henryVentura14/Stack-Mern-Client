import React, { Fragment } from 'react';
import Task from './Task'

const ListTask = () => {
    const taskProject = [
        { name: "choose name", state: true },
        { name: "change variable", state: true },
        { name: "buy pc", state: false },
        { name: "build pc", state: false },
    ];
    return (
        <Fragment>
            <h2>Project: virtual shop</h2>
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
            >Delete project &times;</button>
        </Fragment>
    );
}

export default ListTask;