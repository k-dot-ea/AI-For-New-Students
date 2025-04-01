import React from 'react'
import uohwhiteLogo from '../../../assets/images/uoh-white.svg'
import './logo.css'

const LogoNavbar = () => (
    <div id="homepage"
        title='Go to - The University of Hull Official Website'>
        <a href="https://www.hull.ac.uk/">
            <img className="homepageimg" src={uohwhiteLogo}
                alt="The University of Hull" />
        </a>
    </div>
);
export { LogoNavbar };
