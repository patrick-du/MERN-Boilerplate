import axios from 'axios';

const baseURL =
  process.env.NODE_ENV === 'production'
    ? 'https://patrickdu-mern-boilerplate.herokuapp.com/'
    : 'http://localhost:5000/';

const headers =
  process.env.NODE_ENV === 'production'
    ? {}
    : { 'Access-Control-Allow-Origin': 'http://localhost:3000' };

// Set config defaults
const instance = axios.create({
  baseURL,
  timeout: 1000,
  headers: headers,
});

export default instance;
