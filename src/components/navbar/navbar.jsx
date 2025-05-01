import React, { useState, useEffect, useRef } from "react"
import { LogoNavbar } from './logo/logo'
import { MenuButton } from './menu/menuButton/menuButton'
import { RefreshButton } from './menu/refreshButton/refreshButton'
import { MenuPanel } from './menu/menuPanel/menuPanel'
import './navbar.css'


const Navbar = () => {
    const [menuActive, setMenuActive] = useState(false);
    const menuRef = useRef(null);

    const toggleMenu = () => {
        setMenuActive(!menuActive);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setMenuActive(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <nav id="navbar" ref={menuRef}>
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