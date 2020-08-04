import axios from 'axios';

// Set config defaults
const instance = axios.create({
  baseURL: 'http://localhost:5000/',
  timeout: 1000,
});

export default instance;
