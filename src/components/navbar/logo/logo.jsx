import React from 'react'
import uohwhiteLogo from '../../../assets/images/uoh-white.svg'

const LogoNavbar = () => (
    <div id="homepage"
        title='Go to - The University of Hull Official Website'>
        <a href="https://www.hull.ac.uk/">
            <img className="homepageimg" src={uohwhiteLogo}
                alt="The University of Hull" width="150" height="95" />
        </a>
    </div>
);

export { LogoNavbar };