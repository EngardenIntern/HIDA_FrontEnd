import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://192.168.0.161:8080/api/v1',
    headers: {
        'Content-Type': 'application/json',
    },
})

export default instance;