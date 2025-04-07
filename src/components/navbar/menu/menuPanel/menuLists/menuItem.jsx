import React from 'react'
import './menuList.css'

const MenuItem = ({ title, href }) => (
    <li>
        <button
            type="button"
            aria-haspopup="dialog"
            aria-expanded="false"
            aria-controls={`radix-:${title}`}
            data-state="closed"
            className="menulist-li"
            value={title}
            title={title}
        >
            <h2 id={`radix-:${title}`} className='hidden'>{title}</h2>
            {title}
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" className="arrow">
                <title>right arrow</title>
                <g strokeLinecap="square" strokeWidth="4" fill="none" stroke="white" strokeLinejoin="miter" strokeMiterlimit="10">
                    <polyline points="20,16 28,24 20,32 " stroke="white"></polyline>
                </g>
            </svg>
        </button>
    </li>
);

export default MenuItem;