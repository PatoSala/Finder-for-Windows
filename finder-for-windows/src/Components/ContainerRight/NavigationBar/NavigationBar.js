import React from "react";
import { useLocation } from "react-router-dom";
import { IoChevronBackOutline, IoChevronForwardOutline } from "react-icons/io5";
import ChevronButton from '../../ChevronButton/ChevronButton';
import ViewType from '../../ViewType/ViewType';
import './NavigationBar.css';

function NavigationBar() {
    return (
        <div className="nav-bar">

            <div className="left-content-wrapper">
                <ChevronButton direction={"left"}/>
                <ChevronButton direction={"right"}/>

                <div className="current-dir">
                    <h2 className="navbar-title">{useLocation().pathname.replace('/', '')}</h2>
                </div>
            </div>

            <div className="right-content-wrapper">
                <ViewType/>
            </div>

        </div>
    )
}

export default NavigationBar;