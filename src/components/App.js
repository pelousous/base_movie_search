import React, {useState, useEffect} from 'react';
import SearchBar from './SearchBar';
import searchYoutube from '../apis/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import useVideos from '../hooks/useVideos';

const App = () => {
    const [videos, search] = useVideos('react javascript');
    const [selectedVideo, setSelectedVideo] = useState(null);

    useEffect(() => {
        setSelectedVideo(videos[0]);
    },[videos]);
    
    
    return (
        <div className="ui container">
            <SearchBar onSubmitSearch={search} />
            <div className="ui grid">
                <div className="two column row">
                    <div className="nine wide column">
                        <VideoDetail selectedVideo={selectedVideo} />    
                    </div>   
                    <div className="seven wide column">
                        <VideoList videos={videos} onVideoSelect={setSelectedVideo} />
                    </div> 
                </div>
            </div>
        </div>
    )
}

export default App;