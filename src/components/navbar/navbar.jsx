import React, { useState } from "react"
import { LogoNavbar } from './logo/logo'
import { MenuButton } from './menu/menuButton/menuButton'
import { RefreshButton } from './menu/refreshButton/refreshButton'
import { MenuPanel } from './menu/menuPanel/menuPanel'
import './navbar.css'


const Navbar = () => {
    const [menuActive, setMenuActive] = useState(false);

    const toggleMenu = () => {
        setMenuActive(!menuActive);
    };

    return (
        <nav id="navbar">
            <LogoNavbar />
            <div id="menu-refresh">
                <MenuButton toggleMenu={toggleMenu} menuActive={menuActive} />
                <RefreshButton />
            </div>
            {menuActive && <MenuPanel />}
        </nav>
    );
};

export { Navbar }