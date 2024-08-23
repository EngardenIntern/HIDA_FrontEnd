import axios from 'axios';

const SERVER_URI = process.env.REACT_APP_SERVER_URI;
const REFRESH_URI = process.env.REACT_APP_REFRESH_URI;


const instance = axios.create({
    baseURL: `${SERVER_URI}`,
    headers: {
        'Content-Type': 'application/json',
    },
})

const logout = () => {
    localStorage.removeItem('accessToken');
}


// refresh token 재발행 요청
const getRefreshToken = async () => {
    try {
        const response = await axios.patch({
            baseURL: REFRESH_URI,
            headers: {
                'Content-Type': 'application/json',
                'RefreshToken': ''
            },
        });
        const accessToken = response.data.accessToken;
        return accessToken;
    } catch (error) {
        logout();
    }
}

// 요청에 accessToken 담기
instance.interceptors.request.use(
    (config) => {
        const accessToken = localStorage.getItem('accessToken');
        if (accessToken) {
            config.headers.Authorization = `Bearer ${accessToken}`;
        }
        withCredentials: true;
        return config;
    },
    (error) => {
        return Promise.reject(error);
    },
);

// 응답에 401인지 확인
instance.interceptors.response.use(
    (response) => {
        return response;
    },
    async (error) => {
        const { config, response } = error;
        if (response.status !== 401 || config.sent || config.url === REFRESH_URI) {
            return Promise.reject(error);
        }
        if (response.status === 401) {

            config.sent = true;
            const accessToken = await getRefreshToken();
            if (accessToken) {
                localStorage.setItem('accessToken', accessToken);
                config.headers.Authorization = `Bearer ${accessToken}`;
            }
            return axios(config); // 기존 요청 재요청
        }
    },
);

export default instance;