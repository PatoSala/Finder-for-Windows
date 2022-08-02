import React from "react";
import './ContainerLeft.css';

// Components
import TrafficLights from "./TrafficLights/TrafficLights";
import Sidebar from './Sidebar/Sidebar';

function ContainerLeft() {
    return (
        <div className="containerLeft">
            {/* <TrafficLights/> */}
            <Sidebar/>
        </div>
    )
}

export default ContainerLeft;