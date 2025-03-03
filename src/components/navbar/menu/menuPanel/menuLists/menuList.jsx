import React from 'react'
import MenuItem from './menuItem'
import './menuList.css'

const MenuList = () => (
    <div className="menu-list">
        <ul id='Menulist' className="group/list m-4 flex grow flex-col gap-3 sm:gap-4 md:m-10">
            <MenuItem title="Study" />
            <MenuItem title="Life at Hull" />
            <MenuItem title="Research" />
            <MenuItem title="International" />
            <MenuItem title="Work with us" />
            <MenuItem title="News and events" />
        </ul>
    </div>
)

export { MenuList }