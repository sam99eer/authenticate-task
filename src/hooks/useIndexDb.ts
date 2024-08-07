import { openDB } from 'idb';
import { useEffect, useState } from 'react';
import type { T_IDB } from 'src/types/db';
import { LocalDB } from 'src/types/db';
import { DB, DB_TABLES } from 'src/utils/Constants';

const useIndexDb = () => {
    const [db, setDb] = useState<T_IDB>(null);

    const connectToDb = async () => {
        let database: T_IDB = null;
        database = await openDB<LocalDB>(DB.NAME, DB.VERSION, {
            upgrade(db) {
                db.createObjectStore(DB_TABLES.USERS);

                const watchlist = db.createObjectStore(DB_TABLES.WATCHLIST, {
                    autoIncrement: true,
                });
                watchlist.createIndex('email', 'email', { unique: false });
                watchlist.createIndex('watchlistId', 'watchlistId', {
                    unique: false,
                });

                const watchlists = db.createObjectStore(DB_TABLES.WATCHLISTS, {
                    autoIncrement: true,
                });
                watchlists.createIndex('email', 'email', { unique: false });
            },
        });
        setDb(database);
        return database;
    };

    const initDb = async () => {
        if (!db) {
            const helperDb = await connectToDb();
            return helperDb;
        }
        return db;
    };

    useEffect(() => {
        connectToDb();
        return () => {
            if (db) {
                db.close();
            }
        };
    }, []);

    return { db, initDb };
};

export default useIndexDb;
