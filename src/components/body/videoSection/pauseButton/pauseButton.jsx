import React, { useState } from "react";
import './pauseButton.css';

const PauseButton = () => {
    const [isPaused, setIsPaused] = useState(false);

    const handlePause = () => {
        const video = document.querySelector('.video-object');
        if (video) {
            if (video.paused) {
                video.play();
                setIsPaused(false);
            } else {
                video.pause();
                setIsPaused(true);
            }
        }
    };

    return (
        <button
            type="button"
            aria-label="pause"
            id="pause-button"
            className={`pause-button ${isPaused ? 'nc-int-icon-state-b' : ''}`}
            onClick={handlePause}
        >
            <svg xmlns="http://www.w3.org/2000/svg" height="32" width="32" viewBox="0 0 32 32">
                <title>play to pause</title>
                <g fill="white" stroke="white" stroke-linecap="square" stroke-linejoin="miter" stroke-miterlimit="10" stroke-width="2">
                    <g className={`js-nc-int-icon nc-int-play-to-pause ${isPaused ? 'nc-int-icon-state-b' : ''}`}>
                        <rect height="26" width="7" fill="none" stroke="white" x="5" y="3"></rect>
                        <rect height="26" width="7" fill="none" x="20" y="3"></rect>
                        <polygon fill="none" points="5 29 27 16 5 3 5 29" stroke="white"></polygon>
                    </g>
                </g>
            </svg>
        </button>
    )
};


export { PauseButton }
