import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { ROUTES } from 'src/data/Routes';
import useIndexDb from 'src/hooks/useIndexDb';
import type { T_IDB_Error } from 'src/types/db';
import { DB_TABLES } from 'src/utils/Constants';
import useAuthStore from './useAuthStore';

const useAuthFunctions = () => {
    const db = useIndexDb();
    const setLogin = useAuthStore((store) => store.login);
    const navigate = useNavigate();

    const handleLogin = (email: string) => {
        if (db) {
            db.get(DB_TABLES.USERS, email)
                .then((result) => {
                    if (!result) throw 'Not Exist';
                    setLogin(email);
                    navigate(ROUTES.HOME);
                })
                .catch(() =>
                    toast.error(
                        'This email does not exist. Please register this email!'
                    )
                );
        } else {
            toast.error('Unable to connect to IndexDB');
        }
    };

    const handleRegister = (email: string) => {
        if (db) {
            db.add(
                DB_TABLES.USERS,
                {
                    email,
                },
                email
            )
                .then(() => {
                    setLogin(email);
                    navigate(ROUTES.HOME);
                })
                .catch((err) => {
                    const error = err as T_IDB_Error;

                    if (error.message.includes('already exist')) {
                        return toast.error(
                            'This email already exists. Please login!'
                        );
                    }

                    toast.error(
                        'Unable to register this email address. Please try another!'
                    );
                });
        } else {
            toast.error('Unable to connect to IndexDB');
        }
    };

    return {
        handleLogin,
        handleRegister,
    };
};

export default useAuthFunctions;
