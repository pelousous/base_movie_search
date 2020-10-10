import React from 'react';

const VideoDetail = ({selectedVideo}) => {
    return (
        <div>
            {
                selectedVideo ? 
                    (<div>
                        <iframe src={`https://www.youtube.com/embed/${selectedVideo.id.videoId}`} title={selectedVideo.snippet.title}   width="560" height="315" frameborder="0"></iframe>
                        <div className="ui segment">
                            <h4 className="uiheader">{selectedVideo.snippet.title}</h4>
                            <p>{selectedVideo.snippet.description}</p>
                        </div>
                    </div>)
                : 
                    (<div>video non selezionato</div>)
            }
        </div>
    )
}

export default VideoDetail;