import React from 'react';
import QuickLinkItem from './quickLinkItem';

const QuickLinks = () => (
    <div className="p-4 md:px-10 md:py-6">
        <p className="mb-6 text-[14px] uppercase leading-[21px] tracking-[1.6px] opacity-80 md:text-[16px]">Quick links</p>
        <ul className="mb-3 flex flex-col gap-3 md:mb-0 md:gap-4">
            <QuickLinkItem
                href="/choose-hull/study-at-hull/visit-us/how-to-find-us.aspx"
                title="Find us"
                imgSrc="/assets/icon-library/standard/pin-3.x30400367.svg"
                imgAlt="location pin"
            />
            <QuickLinkItem
                href="/study/order-or-download-a-prospectus/index.aspx"
                title="Download a prospectus"
                imgSrc="/assets/icon-library/standard/data-download.x7676577f.svg"
                imgAlt="download file"
            />
            <QuickLinkItem
                href="/staff-and-students/index.aspx"
                title="Staff and students"
                imgSrc="/assets/icon-library/standard/profile.xd7e8de56.svg"
                imgAlt="profile"
            />
            <QuickLinkItem
                href="/choose-hull/study-at-hull/library/index.aspx"
                title="Library"
                imgSrc="/assets/icon-library/standard/book.xa05b630b.svg"
                imgAlt="book"
            />
            <QuickLinkItem
                href="https://london.hull.ac.uk/"
                title="London campus"
                imgSrc="/assets/icon-library/standard/map-pin.xfd7424ee.svg"
                imgAlt="map-pin"
            />
        </ul>
    </div>
);

export default QuickLinks;