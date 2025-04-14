import React from 'react'
import './contentButtons.css'

const ContentButtons = () => (
    <div className="border2" style={{opacity: 1, willChange: 'opacity, transform', transform: 'none'}}>
        <div className="button1">
            <a href="" aria-label="Find your course" className="button-1">Find your course</a>
        </div>
        <div className="button2">
            <a href="" aria-label="Why Hull?" className="button-2">Why Hull?</a>
        </div>
    </div>
);

export { ContentButtons }
