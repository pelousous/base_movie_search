import React, {useState, useEffect} from 'react';
import SearchBar from './SearchBar';
import searchYoutube from '../apis/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

const App = () => {
    const [videos, setVideos] = useState([]);
    const [selectedVideo, setSelectedVideo] = useState(null);
    const [term, setTerm] = useState('react javascript');

    const onVideoSelect = (video) => {
        setSelectedVideo(video);
    }
    const onSubmitSearch = async (term) => {
        const response = await searchYoutube.get('/search',    {
            params: {
                q: term
            }
        });

        setVideos(response.data.items);
        setSelectedVideo(response.data.items[0]);
    }

    useEffect(() => {
        onSubmitSearch(term);
    },[]);
    
    
    return (
        <div className="ui container">
            <SearchBar onSubmitSearch={onSubmitSearch} />
            <div className="ui grid">
                <div className="two column row">
                    <div className="nine wide column">
                        <VideoDetail selectedVideo={selectedVideo} />    
                    </div>   
                    <div className="seven wide column">
                        <VideoList videos={videos} onVideoSelect={onVideoSelect} />
                    </div> 
                </div>
            </div>
        </div>
    )
}

export default App;