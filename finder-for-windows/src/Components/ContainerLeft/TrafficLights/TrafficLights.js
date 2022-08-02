import React from "react";
import './TrafficLights.css';

function TrafficLights() {

    return (
        <div className="dragable">
            {/* <div className="trafficLights-container">
                <div className="trafficlight"></div>
                <div className="trafficlight"></div>
                <div className="trafficlight"></div>
            </div> */}

            <div className="traffic-lights">
                <button className="traffic-light traffic-light-close" id="close"></button>
                <button className="traffic-light traffic-light-minimize" id="minimize"></button>
                <button className="traffic-light traffic-light-maximize" id="maximize"></button>
            </div>
        </div>
    )
}

export default TrafficLights;