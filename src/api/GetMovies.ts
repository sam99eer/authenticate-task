import { toast } from 'react-toastify';
import { Api } from 'src/api/ApiClient';
import type { T_MoviesAPIResponse } from 'src/types/api/Movie';
import { CONSTANTS } from 'src/utils/Constants';

const GetMovies = async (searchVal: string) => {
    try {
        const query = new URLSearchParams();
        query.set('apikey', CONSTANTS.API_KEY);
        query.set('s', searchVal);

        const apiUrl = await Api.get(`?${query.toString()}`);
        const data: T_MoviesAPIResponse = apiUrl.data;

        if (data.Response === 'False') throw data.Error;

        return data.Search;
    } catch (err) {
        toast.error(`${err}`);
    }
};

export default GetMovies;
