import React from 'react';
import Sidebar from '../layout/Sidebar'
import Navbar from '../layout/Navbar'
import FormTask from '../task/FormTask'
import ListTask from '../task/ListTask'

const Projects = () => {
    return (
        <div className="content-app">
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