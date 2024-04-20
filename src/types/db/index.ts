import { DBSchema, IDBPDatabase } from 'idb';
import { T_Movie } from 'src/types/api/Movie';
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
    [DB_TABLES.WATCHLISTS]: {
        key: number;
        value: {
            title: string;
            description: string;
            email: string;
            isWatched: boolean;
            movie: T_Movie;
        };
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
