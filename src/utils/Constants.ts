import type { T_DBConfig } from 'src/types/db';

export const CONSTANTS = {
    LOCAL_EMAIL: 'loggedEmail',
};

export const DB: T_DBConfig = {
    NAME: 'watchlistDb',
    VERSION: 1,
};

export const DB_TABLES = {
    USERS: 'users',
    WATCHLISTS: 'watchlists',
} as const;
