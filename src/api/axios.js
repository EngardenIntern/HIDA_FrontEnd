import axios from 'axios';

const SERVER_URI = process.env.REACT_APP_SERVER_URI;

const instance = axios.create({
    baseURL: `${SERVER_URI}`,
    headers: {
        'Content-Type': 'application/json',
    },
})

const logout = () => {
    localStorage.removeItem('access_token');
}

// const getRefreshToken = async () => {
//     try {
//         const response = await refresh();
//         const accessToken = response.data.data?.accessToken;
//     }
// }

instance.interceptors.request.use(
    (config) => {
        const accessToken = localStorage.getItem('accessToken');
        if(accessToken){
            config.headers.Authorization = `Bearer ${accessToken}`;
        }
        console.log('request', config);
        return config;
    },
    (error) => {
        return Promise.reject(error);
    },
);

export default instance;