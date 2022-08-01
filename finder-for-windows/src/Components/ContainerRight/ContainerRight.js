import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import './ContainerRight.css';

// Components
import NavigationBar from "./NavigationBar/NavigationBar";

// Pages
import Recents from "./Pages/Recents";
import Applications from "./Pages/Applications";
import Desktop from "./Pages/Desktop";
import Documents from "./Pages/Documents";
import Downloads from "./Pages/Downloads";


function ContainerRight() {
    return (
        <div className="containerRight">
            <NavigationBar/>
            <Routes>
                <Route index element={<Recents/>}/>
                <Route path="/Recents" element={<Recents/>}/>
                <Route path="/Applications" element={<Applications/>}/>
                <Route path="/Desktop" element={<Desktop/>}/>
                <Route path="/Documents" element={<Documents/>}/>
                <Route path="/Downloads" element={<Downloads/>}/>
            </Routes>

        </div>
    )
}

export default ContainerRight;