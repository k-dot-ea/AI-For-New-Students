import React from 'react';

const SocialLinkItem = ({ href, imgSrc, imgAlt, title }) => (
    <li>
        <a href={href} className="block h-4 w-4">
            <img className="w-4" src={imgSrc} alt={imgAlt} title={title} />
        </a>
    </li>
);

export default SocialLinkItem;