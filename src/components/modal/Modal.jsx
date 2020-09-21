import React, { useContext } from 'react';
import ModalContext from '../../context/modal/modalContext'
import ProjectContext from '../../context/projects/projectContex'
import TaskContext from '../../context/tasks/taskContext'

const Modal = () => {
    //CONTEXT modal
    const modalContext = useContext(ModalContext)
    const { modal, hideModal } = modalContext
    //context prject
    const projectsContext = useContext(ProjectContext)
    const { deleteProject } = projectsContext;
    //context task
    const tasksContext = useContext(TaskContext)
    const { deleteTask } = tasksContext;
    //FUNCTIONS
    const onClickTask = (idtask, idproject) => {
        deleteTask(idtask, idproject)
        setTimeout(() => {
            hideModal()
        }, 600);
    }
    const onClickProject = (idproject) => {
        deleteProject(idproject)
        setTimeout(() => {
            hideModal()
        }, 600);
    }
    return (
        <React.Fragment>
            <div className="modal">
                <div className="row">
                    <i className="iconClose material-icons"
                        onMouseDown={() => hideModal()}>
                        clear
                    </i>
                </div>
                <div className="content-modal">
                    <span className="title-modal">Are you sure to delete the {modal.type}?</span>
                    <span className="desc-modla">
                        {modal.content}
                    </span>
                    {modal.type === 'project'
                        ? <button
                            className="button-modal"
                            onClick={() => onClickProject(modal.idProject)}
                        >DELETE</button>
                        : <button
                            className="button-modal"
                            onClick={() => onClickTask(modal.idTask, modal.idProject)}
                        >DELETE</button>
                    }
                </div>
            </div>
        </React.Fragment>
    );
}

export default Modal;