import React, { useState } from "react";
import './Collapsables.css';

// Icons
import { FiHardDrive } from 'react-icons/fi';
import { IoPhonePortraitOutline, IoChevronForward } from 'react-icons/io5';

function Locations() {

    const [collapse, setCollapse] = useState(true);

    return (
        <div className="collapsable" style={{height: collapse ? 'max-content' : '15px'}}>
            <div className="title-container">
                <h2>Locations</h2>
                <div className="collapse-button" onClick={() => setCollapse(!collapse)} style={{transform: collapse ? 'rotate(90deg)' : 'rotate(0deg)'}}>
                    <IoChevronForward size={12} color="gray"/>
                </div>
            </div>

            <div className="links">
                <ul style={{display: collapse ? 'block' : 'none'}}>
                    <li>
                        <div className="icon-container">
                            <IoPhonePortraitOutline size={16} color="gray"/>
                        </div>
                        <p className="collapsable-tiem-text">iPhone X</p>
                    </li>
                    <li>
                        <div className="icon-container">
                            <FiHardDrive size={16} color="gray"/>
                        </div>
                        <p className="collapsable-tiem-text">New Volume</p>
                    </li>
                    <li>
                        <div className="icon-container">
                            <FiHardDrive size={16} color="gray"/>
                        </div>
                        <p className="collapsable-tiem-text">Untitled</p>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Locations;