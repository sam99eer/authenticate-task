import { FormEvent, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Button from 'src/components/common/Button';
import Input from 'src/components/common/Input';
import { ROUTES } from 'src/data/Routes';
import useAuthFunctions from 'src/hooks/useAuthFunctions';
import useAuthStore from 'src/hooks/useAuthStore';
import useWatchlist from 'src/hooks/useWatchlist';
import formStyles from 'src/styles/Form.module.css';
import typography from 'src/styles/Typography.module.css';

const LoginForm = () => {
    const [email, setEmail] = useState('');

    const { handleLogin } = useAuthFunctions();
    const { syncWatchlist } = useWatchlist();
    const setLogin = useAuthStore((store) => store.login);

    const navigate = useNavigate();

    const submitHandler = async (event: FormEvent) => {
        event.preventDefault();

        handleLogin(email)
            .then(async () => {
                await syncWatchlist(email);
                setLogin(email);
                navigate(ROUTES.HOME);
            })
            .catch((err: string) => {
                toast.error(err);
            });
    };

    return (
        <>
            <form className={formStyles.container} onSubmit={submitHandler}>
                <h3 className={typography.subheading}>Login</h3>
                <Input
                    type='email'
                    value={email}
                    onChangeText={setEmail}
                    placeholder='Enter Email Address'
                    variant='dark'
                    required
                />
                <Button type='submit' text='Login' />
                <Link
                    to={ROUTES.REGISTER}
                    className={`${typography.link} ${typography.centered}`}
                >
                    Don't have an account yet? Register here!
                </Link>
            </form>
        </>
    );
};

export default LoginForm;
