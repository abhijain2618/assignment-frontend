import axios from 'axios';
import { BACKEND_URL } from '../constants/auth';

const axiosClient = axios.create({
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': '*',
    'Content-Type': 'application/json'
  },
  baseURL: BACKEND_URL
});

export default axiosClient;
