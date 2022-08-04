import React from 'react';

// Components
import FileExplorer from '../FileExplorer/FileExplorer';
import Sidebar from '../Sidebar/Sidebar';

function FinderWrapper() {
    return (
        <div style={{display: 'flex', height: '100vh'}}>
            <Sidebar/>
            <FileExplorer/>
        </div>
    )
}

export default FinderWrapper;