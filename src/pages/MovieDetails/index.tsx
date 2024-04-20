import { useQuery } from 'react-query';
import { useNavigate, useParams } from 'react-router-dom';
import GetMovie from 'src/api/GetMovie';
import DashboardLayout from 'src/components/common/DashboardLayout';
import Loader from 'src/components/common/Loader';
import MovieData from 'src/components/pages/MovieDetails/MovieData';
import { ROUTES } from 'src/data/Routes';
import { KEYS } from 'src/utils/Constants';

const MovieDetails = () => {
    const { movieId } = useParams();
    const navigate = useNavigate();

    const { isLoading, data } = useQuery(
        [KEYS.GET_MOVIE, movieId],
        GetMovie.bind(this, movieId!),
        {
            enabled: !!movieId,
        }
    );

    if (!!movieId === false) {
        return navigate(ROUTES.HOME, { replace: true });
    }

    if (isLoading) return <Loader />;

    return (
        <DashboardLayout>
            <MovieData {...data!} />
        </DashboardLayout>
    );
};

export default MovieDetails;
