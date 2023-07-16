import axios from 'axios';

const apiInstance = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL,
});

// const apiInstance = axios.create({
//     baseURL: import.meta.env.VITE_API_BASE_URL,
//     timeout: 1000,
//     headers: { 'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/json' },
//     withCredentials: true,
// });

// apiInstance.defaults.headers.common.token = JSON.parse(localStorage.getItem('token'));

export default apiInstance;
