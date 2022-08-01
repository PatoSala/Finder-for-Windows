import React from "react";
import { Routes, Route, Link } from "react-router-dom";



function Recents() {
    return (
        <div style={{height: '100%', display: 'flex', alignItems: 'center', backgroundColor: 'red', position: 'absolute'}}>
            Recents
        </div>
    )
}

function Applications() {
    return (
        <div style={{width: '100%', height: '100%', display: 'flex', alignItems: 'center', backgroundColor: 'red'}}>
            Applications
        </div>
    )
}

function Desktop() {
    return (
        <div style={{flex: 1, alignItems: 'center'}}>
            Desktop
        </div>
    )
}

function Documents() {
    return (
        <div style={{flex: 1, alignItems: 'center'}}>
            Documents
        </div>
    )
}

function Downloads() {
    return (
        <div style={{flex: 1, alignItems: 'center'}}>
            Documents
        </div>
    )
}



function ContainerRight() {
    return (
        <div className="containerRight">
            <Routes>
                <Route path="/Recents" element={<Recents/>}/>
                <Route path="/Applications" element={<Applications/>}/>
                <Route path="/Desktop" element={<Desktop/>}/>
                <Route path="/Documents" element={<Downloads/>}/>
            </Routes>
        </div>
    )
}

export default ContainerRight;