import React, { useContext, useEffect } from 'react';
import Sidebar from '../layout/Sidebar'
import Navbar from '../layout/Navbar'
import FormTask from '../tasks/FormTask'
import Modal from '../modal/Modal'
import ListTask from '../tasks/ListTask'
import AuthContext from '../../context/auth/authContext'
import ModalContext from '../../context/modal/modalContext'

const Projects = () => {
    //context auth
    const authContext = useContext(AuthContext)
    const { authUser } = authContext;
    //CONTEXT modal
    const modalContext = useContext(ModalContext)
    const { modal } = modalContext
    //USE EFFECT
    useEffect(() => {
        authUser()
        // eslint-disable-next-line
    }, [])
    return (
        <div className="content-app">
            {modal ? <Modal /> : null}
            <Sidebar />
            <div className="main-section">
                <Navbar />
                <main>
                    <FormTask />
                    <div className="content-task">
                        <ListTask />
                    </div>
                </main>
            </div>
        </div>
    );
}

export default Projects;