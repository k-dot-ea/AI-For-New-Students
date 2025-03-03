import React from 'react'
import { VideoSection } from './videoSection/videoSection'
import { ContentSection } from './contentSection/contentSection'
import './body.css'

const Body = () => {

    return (
        <div id="body" class="body">
            <VideoSection />
            <ContentSection />
        </div>
    );
};

export { Body };