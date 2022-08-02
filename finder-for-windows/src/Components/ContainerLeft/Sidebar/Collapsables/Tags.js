import React, { useState } from "react";
import './Collapsables.css';

// Icons
import { FiHardDrive } from 'react-icons/fi';
import { IoEllipse, IoChevronForward } from 'react-icons/io5';

function Tags() {

    const [collapse, setCollapse] = useState(true);

    return (
        <div className="collapsable" style={{height: collapse ? 'max-content' : '15px'}}>
            <div className="title-container">
                <h2>Tags</h2>
                <div className="collapse-button" onClick={() => setCollapse(!collapse)} style={{transform: collapse ? 'rotate(90deg)' : 'rotate(0deg)'}}>
                    <IoChevronForward size={12} color="gray"/>
                </div>
            </div>

            <div className="links">
                <ul style={{display: collapse ? 'block' : 'none'}}>
                    <li>
                        <div className="icon-container">
                            <IoEllipse size={14} color="red"/>
                        </div>
                        <p className="collapsable-tiem-text">Red</p>
                    </li>
                    <li>
                        <div className="icon-container">
                            <IoEllipse size={14} color="orange"/>
                        </div>
                        <p className="collapsable-tiem-text">Orange</p>
                    </li>
                    <li>
                        <div className="icon-container">
                            <IoEllipse size={14} color="yellow"/>
                        </div>
                        <p className="collapsable-tiem-text">Yellow</p>
                    </li>
                    <li>
                        <div className="icon-container">
                            <IoEllipse size={14} color="green"/>
                        </div>
                        <p className="collapsable-tiem-text">Green</p>
                    </li>
                    <li>
                        <div className="icon-container">
                            <IoEllipse size={14} color="blue"/>
                        </div>
                        <p className="collapsable-tiem-text">Purple</p>
                    </li>
                    <li>
                        <div className="icon-container">
                            <IoEllipse size={14} color="gray"/>
                        </div>
                        <p className="collapsable-tiem-text">Gray</p>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Tags;