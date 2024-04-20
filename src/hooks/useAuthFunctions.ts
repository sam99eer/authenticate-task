import useIndexDb from 'src/hooks/useIndexDb';
import type { T_IDB, T_IDB_Error } from 'src/types/db';
import { DB_TABLES } from 'src/utils/Constants';

const useAuthFunctions = () => {
    const { db, initDb } = useIndexDb();

    const handleLogin = (email: string) => {
        const promise: Promise<string> = new Promise(
            async (resolve, reject) => {
                let localDb: T_IDB = null;

                if (!db) {
                    localDb = await initDb();

                    if (!localDb) {
                        reject('Unable to connect to IndexDB');
                        return;
                    }
                }

                const helper = db ?? localDb;

                if (helper) {
                    helper
                        .get(DB_TABLES.USERS, email)
                        .then((result) => {
                            if (!result) throw `${email} is not registered!`;
                            resolve(result.email);
                        })
                        .catch((err: string) => {
                            reject(err);
                        });
                }
            }
        );
        return promise;
    };

    const handleRegister = (email: string) => {
        const promise: Promise<string> = new Promise((resolve, reject) => {
            if (!db) {
                reject('Unable to connect to IndexDB');
                return;
            }
            db.add(
                DB_TABLES.USERS,
                {
                    email,
                },
                email
            )
                .then(() => resolve('Registered Successfully'))
                .catch((err) => {
                    const error = err as T_IDB_Error;
                    const errorMessage = error.message.includes('already exist')
                        ? 'This email already exists. Please login!'
                        : 'Unable to register this email address. Please try another!';
                    reject(errorMessage);
                });
        });
        return promise;
    };

    return {
        handleLogin,
        handleRegister,
    };
};

export default useAuthFunctions;
