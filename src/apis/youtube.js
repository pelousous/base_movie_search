import axios from 'axios';
const KEY = 'AIzaSyBhFFnRANAVCLnsq_81zrNVOAsnoOFXURQ';

const searchYoutube = axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
            key: KEY,
            part: 'snippet',
            type: 'video',
            q: 'react',
            maxResults: 5
    }
})

export default searchYoutube;

// http://console.developers.google.com/