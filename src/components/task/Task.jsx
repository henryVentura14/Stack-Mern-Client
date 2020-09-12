import React from 'react';

const Task = ({ task }) => {
    return (
        <li className="task showdow">
            <p>{task.name}</p>
            <div className="state">
                {
                    task.state
                        ? (<button type="button" className="complete">Complete</button>)
                        : (<button type="button" className="incomplete">Incomplete</button>)
                }
            </div>
            <div className="actions">
                <button
                type="button"
                className="btn btn-primary"
                >Editar
                </button>
                <button
                type="button"
                className="btn btn-secondary"
                >
                Eliminar</button>
            </div>
        </li>
    );
}

export default Task;