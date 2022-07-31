import React from "react";
import './Collapsables.css';

// Icons
import { BiQuestionMark } from 'react-icons/bi';

function Locations() {
    return (
        <div className="collapsable">
            <div className="title">
                <h2>Locations</h2>
            </div>

            <div className="links">
                <ul>
                    <li>
                        <div className="icon-container">
                            <BiQuestionMark size={16} color="gray"/>
                        </div>
                        <p className="collapsable-tiem-text">New Volume</p>
                    </li>
                    <li>
                        <div className="icon-container">
                            <BiQuestionMark size={13} color="gray"/>
                        </div>
                        <p className="collapsable-tiem-text">New Volume</p>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Locations;