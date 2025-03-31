import React from 'react';
import UnsameVideo from '../../../../assets/video-library/Unsame_old_story_University_of_Hull.mp4'
import PosterImg from '../../../../assets/images/UniHull_Poster.webp'
import './video.css'

const Video = () => (
    <div id="video-div">
        <div className="video-cover"></div>
        <video
            className="video-object"
            preload="metadata" muted autoPlay loop playsInline
            poster={PosterImg} width="1440" height="810">
            <source src={UnsameVideo} type="video/mp4" />
            <p>Unsame old story - University of Hull</p>
        </video>
    </div>
);


export { Video }