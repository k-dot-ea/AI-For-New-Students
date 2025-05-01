import React, { useState } from 'react'
import './contentBody.css'

const ContentBody = () => {
    const [isOpen, setIsOpen] = useState(false);

    React.useEffect(() => {
        setTimeout(() => setIsOpen(true), 1000);
    }
    , []);
    return (
        <div class={`border1 ${isOpen ? 'open' : ''}`}>
            <div className="welcome-container">
                <h1 className="welcome">
                    {<span>Queries On Your New Journey?</span>}
                    {<span className="block">Ask Us.</span>}
                </h1>
            </div>
        </div>
    );
};

export { ContentBody }