import React from 'react';

const QuickLinkItem = ({ href, title, imgSrc, imgAlt }) => (
    <li>
        <a href={href} title={title} target="" rel="" className="flex items-center gap-3 underline hover:no-underline">
            <img className="w-4" src={imgSrc} alt={imgAlt} />
            {title}
        </a>
    </li>
);

export default QuickLinkItem;