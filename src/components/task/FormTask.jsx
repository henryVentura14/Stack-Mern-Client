import React, { useContext } from 'react';
import projectContext from '../../context/projects/projectContex'

const FormTask = () => {

    const projectsContext = useContext(projectContext)

    const { project } = projectsContext;
    
    if (!project) return null

    const [currentproject] = project
    return (
        <div className="form">
            <form>
                <div className="content-input">
                    <input
                        type="text"
                        className="input-text"
                        placeholder="Name task"
                        name="name"
                    />
                </div>
                <div className="content-input">
                    <input
                        type="submit"
                        className="btn btn-primary btn-subtmit btn-block"
                        value="Add task"
                    />
                </div>
            </form>
        </div>
    );
}

export default FormTask;