import React from 'react'
import './contentBody.css'

const ContentBody = () => (
    <div class="border1">
        <div className="welcome-container">
            <h1 className="welcome">
                {<span>Queries On Your New Journey?</span>}
                {<span className="block">Ask Us.</span>}
            </h1>
        </div>
    </div>
);

export { ContentBody }