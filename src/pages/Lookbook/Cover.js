import React from 'react';

import CoverVideo from '../../assets/cover.mp4';

const Cover = () => {
    return (
        <div className="Cover">
            <video id="background-video" loop autoPlay>
                <source src={CoverVideo} type="video/mp4" />
                <source src={CoverVideo} type="video/ogg" />
                Your browser does not support the video tag.
            </video>

            <div className="cover-content">
                <h1>Iv.AN.KA.</h1>
                <p>Textile Designer</p>
                <span>Scroll</span>
            </div>
        </div>
    );
};

export default Cover;