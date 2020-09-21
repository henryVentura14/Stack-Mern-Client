import React, { useContext, useState, useEffect } from 'react';
import ProjectContext from '../../context/projects/projectContex'
import TaskContext from '../../context/tasks/taskContext'

const FormTask = () => {
    //project
    const projectsContext = useContext(ProjectContext)
    const { project } = projectsContext;
    //task
    const tasksContext = useContext(TaskContext)
    const { 
        errortask, 
        selectedtask, 
        addTask, 
        validTask, 
        getTask,
        updateTask,
        cleanTask
    } = tasksContext;

    //useEffect
    useEffect(() => {
        if(selectedtask!==null){
            setTask(selectedtask)
        }else{
            setTask({
                name:''
            })
        }
    }, [selectedtask]);
    //states
    const [task, setTask] = useState({
        name: ''
    })
    const { name } = task
    if (!project) return null

    const [currentproject] = project

    //FUNCTIONS
    const handleChange = e => {
        setTask({
            ...task,
            [e.target.name]: e.target.value
        })
    }
    const onSubmit = e => {
        e.preventDefault()

        //VALIDAR
        if (name.trim() === '') {
            validTask();
            return;
        }
        //REVISAR UPDATE O NEW TASK
        if(selectedtask===null){
            task.project = currentproject._id;
            addTask(task);
        }else{
            updateTask(task)
            cleanTask()
        }
        //GET TASK
        getTask(currentproject._id);

        //RESET FORM
        setTask({
            name: ''
        })
    }
    return (
        <div className="form">
            <form onSubmit={onSubmit}>
                <div className="content-input">
                    <input
                        type="text"
                        className="input-text"
                        placeholder="Name task"
                        name="name"
                        value={name}
                        onChange={handleChange}
                    />
                </div>
                <div className="content-input">
                    <input
                        type="submit"
                        className="btn btn-primary btn-subtmit btn-block"
                        value={selectedtask?"Edit task":"Add task"}
                    />
                </div>
            </form>
            {errortask ? <p className="message error">The task name is required</p> : null}
        </div>
    );
}

export default FormTask;