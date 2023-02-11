import Axios from 'axios';
import { RESUS_API_KEY, RESUS_API_URL } from '../config';

export const ResusAxios = Axios.create({
  baseURL: RESUS_API_URL,
  headers: {
    'X-API-KEY': RESUS_API_KEY
  }
})