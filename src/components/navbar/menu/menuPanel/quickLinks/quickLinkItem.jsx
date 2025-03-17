import React from 'react';
import './quickLinks.css';

const QuickLinkItem = ({ text, isActive }) => {
    return (
        <div className={`menu-item ${isActive ? 'active' : ''}`}>
            {text}
        </div>
    );
};

export default QuickLinkItem;

