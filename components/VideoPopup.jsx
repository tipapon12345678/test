import React from "react";
import ReactPlayer from "react-player/youtube";



const VideoPopup = ({ show, setShow, videoId, setVideoId,movi }) => {
    const hidePopup = () => {
        setShow(false);
        setVideoId(null);
    };
    return (
        <div className={`videoPopup ${show ? "visible" : ""}`}>
            <div className="opacityLayer" onClick={hidePopup}></div>
            <div className="videoPlayer">
                <span className="closeBtn" onClick={hidePopup}>
                    Close
                </span>
                <div key={videoId}>
                <iframe width="100%" height="400" src={`https://www.youtube.com/embed/${movi.attributes.Youtube}`}
                           title="YouTube video player" frameBorder="0"                       /*${videoId}*/ 
                           allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                           allowFullScreen={true}  >
                          
                           </iframe>
                           </div>
            </div>
        </div>
    );
};

export default VideoPopup;