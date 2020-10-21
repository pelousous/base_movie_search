import React, {useState, useEffect} from 'react';
import searchYoutube from '../apis/youtube';

const useVideos = (term) => {
    const [videos, setVideos] = useState([]);

    const search = async (term) => {
        const response = await searchYoutube.get('/search',    {
            params: {
                q: term
            }
        });

        setVideos(response.data.items);
    }

    useEffect(() => {
        search(term);
    },[]);


    return [videos, search];
}

export default useVideos;