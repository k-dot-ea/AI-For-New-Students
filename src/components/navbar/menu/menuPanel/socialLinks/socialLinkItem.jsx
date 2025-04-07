import React from 'react'
import './socialLinks.css'

const SocialLinkItem = ({ href, imgSrc, imgAlt, title }) => (
    <li className="social-link-list">
        <a href={href} className="social-links">
            <img className="icon" src={imgSrc} alt={imgAlt} title={title} />
        </a>
    </li>
);

export default SocialLinkItem