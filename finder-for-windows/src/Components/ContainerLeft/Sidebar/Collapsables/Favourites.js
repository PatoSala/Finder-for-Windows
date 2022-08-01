import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import './Collapsables.css';

// Icons
import { IoArrowDownCircleOutline, IoDocumentOutline, IoTimeOutline, IoChevronForward } from "react-icons/io5";
import { IoIosDesktop } from "react-icons/io";
import { SiAppstore } from "react-icons/si";

function Favourites() {

    const [collapse, setCollapse] = useState(true);

    return (
        <div className="collapsable" style={{height: collapse ? 'max-content' : '15px'}}>
            <div className="title-container">
                <h2>Favorites</h2>
                <div className="collapse-button" onClick={() => setCollapse(!collapse)} style={{transform: collapse ? 'rotate(90deg)' : 'rotate(0deg)'}}>
                    <IoChevronForward size={12} color="gray"/>
                </div>
            </div>

            <div className="links">
                <ul style={{display: collapse ? 'block' : 'none'}}>
                    
                    <Link to={"/Recents"} style={{textDecoration: 'none'}}>
                        <li style={{backgroundColor: useLocation().pathname === '/Recents' ? 'rgb(229, 229, 234)' : 'transparent'}}>
                            <div className="icon-container">
                                <IoTimeOutline size={16} color="#06c"/>
                            </div>
                            <p className="collapsable-tiem-text">Recents</p>
                        </li>
                    </Link>

                    
                    <Link to={"/Applications"} style={{textDecoration: 'none'}}>
                        <li style={{backgroundColor: useLocation().pathname === '/Applications' ? 'rgb(229, 229, 234)' : 'transparent'}}>
                            <div className="icon-container">
                                <SiAppstore size={13} color="#06c"/>
                            </div>
                            <p className="collapsable-tiem-text">Applications</p>
                        </li>
                    </Link>

                    
                    <Link to={"/Desktop"} style={{textDecoration: 'none'}}>
                        <li style={{backgroundColor: useLocation().pathname === '/Desktop' ? 'rgb(229, 229, 234)' : 'transparent'}}>
                            <div className="icon-container">
                                <IoIosDesktop size={16} color="#06c"/>
                            </div>
                            <p className="collapsable-tiem-text">Desktop</p>
                        </li>
                    </Link>

                    <Link to={"/Documents"} style={{textDecoration: 'none'}}>
                        <li style={{backgroundColor: useLocation().pathname === '/Documents' ? 'rgb(229, 229, 234)' : 'transparent'}}>
                            <div className="icon-container">
                                <IoDocumentOutline size={16} color="#06c"/>
                            </div>
                            <p className="collapsable-tiem-text">Documents</p>
                        </li>
                    </Link>

                    <Link to={"/Downloads"} style={{textDecoration: 'none'}}>
                        <li style={{backgroundColor: useLocation().pathname === '/Downloads' ? 'rgb(229, 229, 234)' : 'transparent'}}>
                            <div className="icon-container">
                                <IoArrowDownCircleOutline size={16} color="#06c"/>
                            </div>
                            <p className="collapsable-tiem-text">Downloads</p>
                        </li>
                    </Link>

                </ul>
            </div>
        </div>
    )
}

export default Favourites;