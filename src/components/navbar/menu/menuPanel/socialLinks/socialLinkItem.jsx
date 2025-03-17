import React from 'react';

const SocialLinkItem = ({ href, imgSrc, imgAlt, title }) => (
    <li className="inline-block">
        <a href={href} className="block w-5 h-5 opacity-80 hover:opacity-100 transition-opacity">
            <img className="w-full h-full" src={imgSrc} alt={imgAlt} title={title} />
        </a>
    </li>
);

export default SocialLinkItem;