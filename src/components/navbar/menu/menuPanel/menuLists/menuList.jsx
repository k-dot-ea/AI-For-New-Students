import React from 'react'
import MenuItem from './menuItem'
import './menuList.css'

const MenuList = () => (
    <div id='menu-list' className='menu-list'>
        <ul id='Menulist' className='menu-list'>
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