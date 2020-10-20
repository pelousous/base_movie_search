import React from 'react';
import SearchBar from './SearchBar';
import searchYoutube from '../apis/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';


class App extends React.Component {
    state = {'videos': []};

    componentDidMount = () => {
        this.onSubmitSearch('react javascript');
    }

    onSubmitSearch = async (term) => {
        const response = await searchYoutube.get('/search',    {
            params: {
                q: term
            }
        });

        this.setState({
            'videos': response.data.items,
            'selectedVideo': response.data.items[0]
        });
    }

    onVideoSelect = (video) => {
        this.setState({'selectedVideo': video});
    }

    render() {
        return (
            <div className="ui container">
                <SearchBar onSubmitSearch={this.onSubmitSearch} />
                <div className="ui grid">
                    <div className="two column row">
                        <div className="nine wide column">
                            <VideoDetail selectedVideo={this.state.selectedVideo} />    
                        </div>   
                        <div className="seven wide column">
                            <VideoList videos={this.state.videos} onVideoSelect={this.onVideoSelect} />
                        </div> 
                    </div>
                </div>
            </div>
        )
    }
}

export default App;