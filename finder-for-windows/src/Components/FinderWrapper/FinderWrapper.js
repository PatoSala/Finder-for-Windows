import React from 'react';

// Components
import ContainerLeft from '../ContainerLeft/ContainerLeft.js';
import ContainerRight from '../ContainerRight/ContainerRight.js';

function FinderWrapper() {
    return (
        <div style={{display: 'flex'}}>
            <ContainerLeft/>
            <ContainerRight/>
        </div>
    )
}

export default FinderWrapper;