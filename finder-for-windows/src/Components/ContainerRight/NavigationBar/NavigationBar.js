import React from "react";
import { useLocation } from "react-router-dom";
import { IoChevronBackOutline, IoChevronForwardOutline } from "react-icons/io5";
import './NavigationBar.css';

function NavigationBar() {
    return (
        <div className="nav-bar">

            <div className="back-forward-controls">
                <div className="arrow-container active">
                    <IoChevronBackOutline size={21} color="rgb(100, 92, 94)"/>
                </div>
                <div className="arrow-container">
                    <IoChevronForwardOutline size={21} color="rgb(180, 172, 184)"/>
                </div>
            </div>

            <div className="current-dir">
                <h2 className="navbar-title">{useLocation().pathname.replace('/', '')}</h2>
            </div>

        </div>
    )
}

export default NavigationBar;