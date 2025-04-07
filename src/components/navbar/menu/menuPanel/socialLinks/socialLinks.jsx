import React from 'react'
import SocialLinkItem from './socialLinkItem'
import instagram from '../../../../../assets/images/logo-instagram.svg'
import tiktok from '../../../../../assets/images/tiktok.svg'
import facebook from '../../../../../assets/images/logo-facebook.svg'
import youtube from '../../../../../assets/images/logo-youtube.svg'
import linkedin from '../../../../../assets/images/logo-linkedin.svg'
import './socialLinks.css'

const SocialLinks = () => (
    <div id='social-links' className='social-links'>
        <ul>
            <SocialLinkItem
                href="https://www.instagram.com/universityofhull/"
                imgSrc={instagram} imgAlt="Instagram logo" title="Instagram"
            />
            <SocialLinkItem
                href="https://www.tiktok.com/@uniofhull"
                imgSrc={tiktok} imgAlt="Tiktok logo" title="TikTok"
            />
            <SocialLinkItem
                href="https://www.facebook.com/UniversityOfHull"
                imgSrc={facebook} imgAlt="Facebook logo" title="Facebook"
            />
            <SocialLinkItem
                href="https://www.youtube.com/@uniofhull"
                imgSrc={youtube} imgAlt="Youtube logo" title="YouTube"
            />
            <SocialLinkItem
                href="https://www.linkedin.com/edu/the-university-of-hull-12668"
                imgSrc={linkedin} imgAlt="LinkedIn logo" title="LinkedIn"
            />
        </ul>
    </div>
);

export default SocialLinks