import React, { useState } from 'react';
import { IoChevronBackOutline, IoChevronForwardOutline, IoChevronUpOutline, IoChevronDownOutline } from "react-icons/io5";
import './ChevronButton.css';

function ChevronButton({ direction }) {

    const [active, setActive] = useState(false)

    return (
        <button className="chevron-container">
            { direction === 'up' ? <IoChevronUpOutline size={21} color="rgb(100, 92, 94)"/> : null }
            { direction === 'down' ? <IoChevronDownOutline size={21} color="rgb(100, 92, 94)"/> : null }
            { direction === 'left' ? <IoChevronBackOutline size={21} color="rgb(100, 92, 94)"/> : null }
            { direction === 'right' ? <IoChevronForwardOutline size={21} color="rgb(100, 92, 94)"/> : null }
        </button>
    )
}

export default ChevronButton;