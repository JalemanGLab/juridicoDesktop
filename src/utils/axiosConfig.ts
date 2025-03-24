import axios from 'axios';

const axiosConfig = axios.create({
    baseURL: 'http://127.0.0.1:8000/api/',
});

axiosConfig.interceptors.request.use(
    (config) => {
        const authToken = localStorage.getItem('authToken');
        if (authToken) {
            config.headers.Authorization = `Bearer ${authToken}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

axiosConfig.interceptors.response.use(
    (response) => {
        return response;
    },
);

export default axiosConfig;