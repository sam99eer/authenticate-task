import type { T_DBConfig } from 'src/types/db';

export const CONSTANTS = {
    LOCAL_EMAIL: 'loggedEmail',
    API_KEY: '5f5673d0',
    OMDB_HOST: 'https://www.omdbapi.com/',
};

export const DB: T_DBConfig = {
    NAME: 'watchlistDb',
    VERSION: 1,
};

export const DB_TABLES = {
    USERS: 'users',
    WATCHLIST: 'watchlist',
    WATCHLISTS: 'watchlists',
} as const;

export const KEYS = {
    GET_MOVIE: 'movie',
    GET_MOVIES: 'movies',
};
