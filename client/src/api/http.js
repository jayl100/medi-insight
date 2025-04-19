import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
});

const requestHandler = async(method, url, config) => {
  try {
    if (method === 'get' || method === 'delete') {
      return await apiClient[method](url);
    } else {
      return await apiClient[method](url, config);
    }
  } catch (error) {
    console.error('API ERROR :: ', error);
    throw error;
  }
};

export default requestHandler;