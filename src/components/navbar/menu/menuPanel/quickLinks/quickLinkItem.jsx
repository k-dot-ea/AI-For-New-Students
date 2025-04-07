import React from 'react'
import './quickLinks.css'

const QuickLinkItem = ({ href, title, imgSrc, imgAlt }) => (
    <li>
        <a href={href} title={title} className="link-list">
            <img className="icon" src={imgSrc} alt={imgAlt} />
            {title}
        </a>
    </li>
);

export default QuickLinkItem;

