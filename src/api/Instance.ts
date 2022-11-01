import axios from 'axios';
import { BACKEND_URL } from '../constants/auth';

const axiosClient = axios.create({
  headers: {
    'Content-Type': 'application/json'
  },
  baseURL: BACKEND_URL
});

export default axiosClient;
