import { toast } from 'react-toastify';
import { Api } from 'src/api/ApiClient';
import type { T_MovieAPIResponse } from 'src/types/api/Movie';
import { CONSTANTS } from 'src/utils/Constants';

const GetMovie = async (imdbId: string) => {
    try {
        const query = new URLSearchParams();
        query.set('apikey', CONSTANTS.API_KEY);
        query.set('i', imdbId);

        const apiUrl = await Api.get(`?${query.toString()}`);
        const data: T_MovieAPIResponse = apiUrl.data;

        if (data.Response === 'False') throw data.Error;

        return data;
    } catch (err) {
        toast.error(`${err}`);
    }
};

export default GetMovie;
