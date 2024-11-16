// src/api.js
import axios from 'axios';

const api = axios.create({
  baseURL: 'https://backend-data-pearl.vercel.app/api', // Use the server's base URL
});

export default api;