import React from "react";
import './Collapsables.css';

// Icons
import { IoArrowDownCircleOutline, IoDocumentOutline, IoTimeOutline } from "react-icons/io5";
import { IoIosDesktop } from "react-icons/io";
import { SiAppstore } from "react-icons/si";

function Favourites() {
    return (
        <div className="collapsable">
            <div className="title">
                <h2>Favorites</h2>
            </div>

            <div className="links">
                <ul>
                    <li>
                        <div className="icon-container">
                            <IoTimeOutline size={16} color="#06c"/>
                        </div>
                        <p className="collapsable-tiem-text">Recents</p>
                    </li>
                    <li>
                        <div className="icon-container">
                            <SiAppstore size={13} color="#06c"/>
                        </div>
                        <p className="collapsable-tiem-text">Applications</p>
                    </li>
                    <li>
                        <div className="icon-container">
                            <IoIosDesktop size={16} color="#06c"/>
                        </div>
                        <p className="collapsable-tiem-text">Desktop</p>
                    </li>
                    <li>
                        <div className="icon-container">
                            <IoDocumentOutline size={16} color="#06c"/>
                        </div>
                        <p className="collapsable-tiem-text">Documents</p>
                    </li>
                    <li>
                        <div className="icon-container">
                            <IoArrowDownCircleOutline size={16} color="#06c"/>
                        </div>
                        <p className="collapsable-tiem-text">Downloads</p>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Favourites;