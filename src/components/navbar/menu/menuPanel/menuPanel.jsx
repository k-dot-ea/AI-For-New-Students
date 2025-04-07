import React, { useEffect } from 'react'
import MenuList from './menuLists/menuList'
import QuickLinks from './quickLinks/quickLinks'
import SocialLinks from './socialLinks/socialLinks'
import './menuPanel.css'



const MenuPanel = () => {

    return (
        <div
            role='dialog'
            id="panel"
            data-state="open"
            className='panel'
            title="menu panel"
        >
            <div
                id='menu-panel'
                className="menu-panel">
                <MenuList />
                <QuickLinks />
                <SocialLinks />
            </div>
        </div>
    );
};

export { MenuPanel }