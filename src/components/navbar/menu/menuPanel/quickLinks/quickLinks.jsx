import React from 'react'
import QuickLinkItem from './quickLinkItem'
import location from '../../../../../assets/images/location.svg'
import prospectus from '../../../../../assets/images/downloadprospectus.svg'
import staff from '../../../../../assets/images/staff.svg'
import library from '../../../../../assets/images/library.svg'
import campus from '../../../../../assets/images/campus.svg'
import './quickLinks.css'

const QuickLinks = () => (
    <div id='quicklink' className="quicklink">
        <p className="quicklink-upper">QUICK LINKS</p>
        <ul className="quicklink-ul">
            <QuickLinkItem
                href="https://www.hull.ac.uk/choose-hull/study-at-hull/visit-us/how-to-find-us"
                title="Find us" imgSrc={location} imgAlt="location pin"
            />
            <QuickLinkItem
                href="https://www.hull.ac.uk/study/order-or-download-a-prospectus"
                title="Download a prospectus" imgSrc={prospectus} imgAlt="download file"
            />
            <QuickLinkItem
                href="https://www.hull.ac.uk/staff-and-students"
                title="Staff and students" imgSrc={staff} imgAlt="profile"
            />
            <QuickLinkItem
                href="https://www.hull.ac.uk/choose-hull/study-at-hull/library"
                title="Library" imgSrc={library} imgAlt="book"
            />
            <QuickLinkItem
                href="https://london.hull.ac.uk/"
                title="London campus" imgSrc={campus} imgAlt="map-pin"
            />
        </ul>
    </div>
);

export default QuickLinks;
