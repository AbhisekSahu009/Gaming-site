import React from 'react';
import VideoCss from './../VideoBg/VideoBg.module.css'

function VideoBg() {
    return (
        <div className={VideoCss.bg_video}>
            <i className={`${VideoCss.play_icon} ri-play-large-fill`} ></i>
        </div>
    )
}

export default VideoBg