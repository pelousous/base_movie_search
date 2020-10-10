import React from 'react';
import './VideoItem.css';

const VideoItem = ({video, onVideoSelect}) => {

    return (
        <div className="video-item item" onClick={() => onVideoSelect(video)}>
            <img src={video.snippet.thumbnails.default.url} alt={video.snippet.title} className="ui image small" />
            <div className="content">
                <div>{video.snippet.title}</div>
                <div className="description">Updated 10 mins ago</div>
            </div>
        </div>
    )
}

export default VideoItem;