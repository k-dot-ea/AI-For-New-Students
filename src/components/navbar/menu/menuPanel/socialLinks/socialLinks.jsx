import React from 'react'
import SocialLinkItem from './socialLinkItem'
import './socialLinks.css'

const SocialLinks = () => (
    <div id='social-links' className='social-links'>
        <ul className="flex gap-4">
            <SocialLinkItem
                href="https://www.instagram.com/universityofhull/"
                imgSrc="/assets/icon-library/social/logo-instagram.x1772c8ed.svg"
                imgAlt="Instagram logo"
                title="Instagram"
            />
            <SocialLinkItem
                href="https://www.tiktok.com/@uniofhull"
                imgSrc="/assets/icon-library/social/tiktok.xc6d139da.svg"
                imgAlt="Tiktok logo"
                title="TikTok"
            />
            <SocialLinkItem
                href="https://twitter.com/UniOfHull"
                imgSrc="/assets/icon-library/social/x.x299f4922.svg"
                imgAlt="Twitter logo"
                title="Twitter"
            />
            <SocialLinkItem
                href="https://www.facebook.com/UniversityOfHull"
                imgSrc="/assets/icon-library/social/logo-facebook.x2735543b.svg"
                imgAlt="Facebook logo"
                title="Facebook"
            />
            <SocialLinkItem
                href="https://www.youtube.com/@uniofhull"
                imgSrc="/assets/icon-library/social/logo-youtube.x750cb10f.svg"
                imgAlt="Youtube logo"
                title="YouTube"
            />
            <SocialLinkItem
                href="https://www.linkedin.com/edu/the-university-of-hull-12668"
                imgSrc="/assets/icon-library/social/logo-linkedin.x53bb0ea6.svg"
                imgAlt="LinkedIn logo"
                title="LinkedIn"
            />
        </ul>
    </div>
);

export default SocialLinks;