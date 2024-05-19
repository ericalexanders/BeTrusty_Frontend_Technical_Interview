import axios from 'axios';
import { getLocalStorage, setLocalStorage } from './localStorageUtils';

// Configurar Axios
const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API,
});

api.interceptors.request.use(async (config) => {
  const token = getLocalStorage('auth_token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
}, (error) => {
  return Promise.reject(error);
});

api.interceptors.response.use((response) => {
  return response;
}, async (error) => {
  const originalRequest = error.config;
  if (error.response.status === 401 && !originalRequest._retry) {
    originalRequest._retry = true;
    const newToken = await refreshAuthToken();
    setLocalStorage('auth_token', newToken);
    api.defaults.headers.common['Authorization'] = `Bearer ${newToken}`;
    return api(originalRequest);
  }
  return Promise.reject(error);
});

const refreshAuthToken = async () => {
  const refreshToken = getLocalStorage('auth');
  const response = await axios.post(`${process.env.NEXT_PUBLIC_API}/api/v2/auth/refresh`, {}, {
    headers: { Authorization: `Bearer ${refreshToken}` },
  });
  return response.data.access_token;
};

export default api;