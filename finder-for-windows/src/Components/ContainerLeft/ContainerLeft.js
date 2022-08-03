import React from "react";
import './ContainerLeft.css';

// Components
import Sidebar from './Sidebar/Sidebar';

function ContainerLeft() {
    return (
        <div className="containerLeft">
            <Sidebar/>
        </div>
    )
}

export default ContainerLeft;