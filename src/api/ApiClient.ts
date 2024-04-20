import axios from 'axios';
import { CONSTANTS } from 'src/utils/Constants';

export const Api = axios.create({
    baseURL: CONSTANTS.OMDB_HOST,
    timeout: 25000,
    headers: {
        Accept: 'application/json',
    },
});
