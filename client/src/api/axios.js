import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://mern-hospital-site-3.onrender.com/api',
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default instance;
