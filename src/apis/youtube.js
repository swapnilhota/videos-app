import axios from 'axios';

const KEY = 'AIzaSyCa_eHChuImHIYH_z2VHljLPT_38PfT7d0';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});