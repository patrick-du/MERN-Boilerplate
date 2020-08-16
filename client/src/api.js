import axios from 'axios';

// Set config defaults
const instance = axios.create({
  baseURL: 'http://localhost:5000/',
  timeout: 1000,
  headers: {
    'Access-Control-Allow-Origin': 'http://localhost:3000',
  },
});

export default instance;
