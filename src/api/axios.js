import axios from 'axios';

const SERVER_URI = process.env.REACT_APP_SERVER_URI;

const instance = axios.create({
    baseURL: `${SERVER_URI}`,
    headers: {
        'Content-Type': 'application/json',
    },
})

export default instance;