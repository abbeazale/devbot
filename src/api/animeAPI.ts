import axios from 'axios';

const malApi = axios.create({
    baseURL: 'https://api.myanimelist.net/v2/',
    headers: {
        'X-MAL-CLIENT-ID': process.env.MAL_ID,
        'Accept': '*/*',
    },
});

export default malApi;