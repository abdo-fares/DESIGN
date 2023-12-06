import React, { useState } from 'react';
import Draggable from 'react-draggable';
import './Circle.css'; // Make sure to create this CSS file

function Circle() {
    const [expanded, setExpanded] = useState(false);

    const toggleExpand = () => {
        setExpanded(!expanded);
    };



    return (
        <Draggable>
            <div className={`circle ${expanded ? 'expanded' : ''}`} onClick={toggleExpand}>
                {expanded && <div className="content">Your Content Here</div>}
            </div>
        </Draggable>
    );
}

export default Circle;
