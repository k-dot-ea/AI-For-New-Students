import React from 'react'
import { Video } from './video/video'
import { PauseButton } from './pauseButton/pauseButton'
import './videoSection.css'

const VideoSection = () => {

    return (
        <div
            id="video-section"
            className="video-section"
        >
            <Video />
            <PauseButton />
        </div>
    );
};

export { VideoSection }