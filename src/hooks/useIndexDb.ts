import { openDB } from 'idb';
import { useEffect, useState } from 'react';
import type { T_IDB } from 'src/types/db';
import { LocalDB } from 'src/types/db';
import { DB, DB_TABLES } from 'src/utils/Constants';

const useIndexDb = () => {
    const [db, setDb] = useState<T_IDB>(null);

    useEffect(() => {
        let database: T_IDB = null;

        const connectToDb = async () => {
            database = await openDB<LocalDB>(DB.NAME, DB.VERSION, {
                upgrade(db) {
                    db.createObjectStore(DB_TABLES.USERS);
                },
            });
            setDb(database);
        };

        connectToDb();

        return () => {
            if (database) {
                database.close();
            }
        };
    }, []);

    return db;
};

export default useIndexDb;
