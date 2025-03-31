import React from 'react';
import QuickLinkItem from './quickLinkItem';
import './quickLinks.css';

const QuickLinks = () => {
    return (
        <div className="menu-panel">
            <QuickLinkItem text="Study" />
            <QuickLinkItem text="Life at Hull" />
            <QuickLinkItem text="Research" />
            <QuickLinkItem text="International" />
            <QuickLinkItem text="Work with us" />
            <QuickLinkItem text="News and events" />
        </div>
    );
};

export default QuickLinks;
