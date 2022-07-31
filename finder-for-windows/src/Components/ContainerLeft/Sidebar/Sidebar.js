import React from 'react';
import './Sidebar.css';

// Collapsables
import Favourites from './Collapsables/Favourites';
import Locations from './Collapsables/Locations';

function Sidebar() {
    return (
        <div className="sidebar">

            <Favourites/>
            <Locations/>

        </div>
    )
}

export default Sidebar;