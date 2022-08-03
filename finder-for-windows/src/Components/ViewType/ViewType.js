import React from "react";
import './ViewType.css';
import { IoGridOutline, IoListOutline, IoTvOutline } from 'react-icons/io5';
import { MdOutlineViewWeek } from 'react-icons/md'

function ViewType() {
    return (
        <div className="viewType-container">
            <button className="viewType-button">
                <IoGridOutline style={21} color="rgb(100, 92, 94)"/>
            </button>
            <button className="viewType-button">
                <IoListOutline style={21} color="rgb(100, 92, 94)"/>
            </button>
            <button className="viewType-button">
                <MdOutlineViewWeek style={21} color="rgb(100, 92, 94)"/>
            </button>
            <button className="viewType-button">
                <IoTvOutline style={21} color="rgb(100, 92, 94)"/>
            </button>
        </div>
    )
}

export default ViewType;