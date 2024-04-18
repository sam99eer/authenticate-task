import Home from 'src/pages/Home';
import Login from 'src/pages/Login';
import MovieDetails from 'src/pages/MovieDetails';
import NotFound from 'src/pages/NotFound';
import Register from 'src/pages/Register';
import Watchlist from 'src/pages/Watchlist';
import type { T_Route_Data } from 'src/types/general/Routes';

export const ROUTES = {
    HOME: '/',
    LOGIN: '/login',
    REGISTER: '/register',
    WATCHLIST: '/watchlist',
    MOVIE: '/movie/:movieId',
    NOT_FOUND: '/*',
} as const;

export const PROTECTED_ROUTES: T_Route_Data[] = [
    {
        key: 'HOME',
        path: ROUTES.HOME,
        index: true,
        element: <Home />,
    },
    {
        key: 'WATCHLIST',
        path: ROUTES.WATCHLIST,
        element: <Watchlist />,
    },
    {
        key: 'MOVIE',
        path: ROUTES.MOVIE,
        element: <MovieDetails />,
    },
];

export const PUBLIC_ROUTES: T_Route_Data[] = [
    {
        key: 'LOGIN',
        path: ROUTES.LOGIN,
        element: <Login />,
    },
    {
        key: 'REGISTER',
        path: ROUTES.REGISTER,
        element: <Register />,
    },
    {
        key: 'NOT_FOUND',
        path: ROUTES.NOT_FOUND,
        element: <NotFound />,
    },
];
