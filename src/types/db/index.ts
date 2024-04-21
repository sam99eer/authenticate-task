import { DBSchema, IDBPDatabase } from 'idb';
import type { T_Watchlist, T_Watchlists } from 'src/types/hooks/Watchlist';
import { DB_TABLES } from 'src/utils/Constants';

export type T_DBConfig = {
    NAME: string;
    VERSION: number;
};

export interface LocalDB extends DBSchema {
    [DB_TABLES.USERS]: {
        key: string;
        value: { email: string };
        indexes: { email: string };
    };
    [DB_TABLES.WATCHLIST]: {
        key: string;
        value: T_Watchlist;
        indexes: {
            email: string;
            watchlistId: string;
        };
    };
    [DB_TABLES.WATCHLISTS]: {
        key: string;
        value: T_Watchlists;
        indexes: {
            email: string;
        };
    };
}

export type T_IDB = IDBPDatabase<LocalDB> | null;

export type T_IDB_Error = {
    code: number;
    name: string;
    message: string;
};
