import React from 'react';
import './Sidebar.css';

// Collapsables
import Favourites from './Collapsables/Favourites';
import Locations from './Collapsables/Locations';
import Tags from './Collapsables/Tags';

function Sidebar() {
    return (
        <div className="sidebar">

            <Favourites/>
            <Locations/>
            <Tags/>

        </div>
    )
}

export default Sidebar;