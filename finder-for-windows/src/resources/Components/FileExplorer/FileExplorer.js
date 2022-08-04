import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import './FileExplorer.css';

// Components
import NavigationBar from "./NavigationBar/NavigationBar";

// Pages
import Recents from "../../Pages/Recents";
import Applications from "../../Pages/Applications";
import Desktop from "../../Pages/Desktop";
import Documents from "../../Pages/Documents";
import Downloads from "../../Pages/Downloads";


function FileExplorer() {
    return (
        <div className="file-explorer">
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

export default FileExplorer;