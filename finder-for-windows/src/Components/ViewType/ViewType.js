import React, { useState, useEffect } from "react";
import './ViewType.css';
import { IoGridOutline, IoListOutline, IoTvOutline } from 'react-icons/io5';
import { MdOutlineViewWeek } from 'react-icons/md'

function ViewType() {

    const [viewType, setViewType] = useState(1)     // 0 -> Grid; 1 -> List; 2 -> Cols; 3 -> Gallery

    useEffect(() => {
        console.log(viewType);
    }, [viewType])

    return (
        <div className="viewType-container">

            <button className="viewType-button" onClick={() => {setViewType(0)}} style={{backgroundColor: viewType === 0 ? 'rgb(210, 210, 210, 0.5)' : null}}>
                <IoGridOutline size={18} color="rgb(100, 92, 94)"/>
            </button>

            <div className="line"></div>

            <button className="viewType-button middle" onClick={() => {setViewType(1)}} style={{backgroundColor: viewType === 1 ? 'rgb(210, 210, 210, 0.5)' : null}}>
                <IoListOutline size={24} color="rgb(100, 92, 94)"/>
            </button>

            <div className="line"></div>

            <button className="viewType-button middle" onClick={() => setViewType(2)} style={{backgroundColor: viewType === 2 ? 'rgb(210, 210, 210, 0.5)' : null}}>
                <MdOutlineViewWeek size={22} color="rgb(100, 92, 94)"/>
            </button>

            <div className="line"></div>

            <button className="viewType-button" onClick={() => {setViewType(3)}} style={{backgroundColor: viewType === 3 ? 'rgb(210, 210, 210, 0.5)' : null}}>
                <IoTvOutline size={20} color="rgb(100, 92, 94)"/>
            </button>
        </div>
    )
}

export default ViewType;