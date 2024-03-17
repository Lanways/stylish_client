import axios from 'axios';

export const baseUrl = 'https://www.ezstylish.com/api';

const axiosInstance = axios.create({
  baseURL: baseUrl,
  withCredentials: true,
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = JSON.parse(localStorage.getItem('authToken'));
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    console.error(error);
  }
);

export default axiosInstance;
