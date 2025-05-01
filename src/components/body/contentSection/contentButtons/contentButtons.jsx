import React, { useState, useEffect} from 'react'
import './contentButtons.css'

const ContentButtons = () => {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        setTimeout(() => setIsOpen(true), 1000);
    }
    , []);

    return (
        <div className={`border2 ${isOpen ? 'open' : ''}`} style={{willChange: 'opacity, transform', transform: 'none'}}>
            <div className="button1">
                <a href="" aria-label="Find your course" className="button-1">Find your course</a>
            </div>
            <div className="button1">
                <a href="" aria-label="Why Hull?" className="button-1">Why Hull?</a>
            </div>
        </div>
    )
};

export { ContentButtons }
