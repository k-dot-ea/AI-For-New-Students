import React from 'react';
import './menuButton.css';

const MenuButton = ({ toggleMenu, menuActive }) => (
    <button
        type="button"
        aria-haspopup="dialog"
        aria-expanded={menuActive}
        aria-controls="radix-:r0:"
        data-state={menuActive ? "open" : "closed"}
        id="menu"
        className="menu"
        onClick={toggleMenu}
    >
        <h2 id="hidden">menu</h2>
        <svg xmlns="http://www.w3.org/2000/svg" height="35" width="35" viewBox="0 0 48 48">
            <title>Main menu</title>
            <g strokeLinecap="square" strokeWidth="3" fill="white" stroke="white" strokeLinejoin="miter" strokeMiterlimit="10">
                <g className="menu-icon">
                    <line x1="24" y1="10" x2="46" y2="10" stroke="white"></line>
                    <line x1="2" y1="24" x2="46" y2="24" stroke="white"></line>
                    <line x1="2" y1="38" x2="24" y2="38" stroke="white"></line>
                </g>
            </g>
        </svg>
    </button>
);

export { MenuButton };