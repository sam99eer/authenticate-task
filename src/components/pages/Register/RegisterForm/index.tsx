import { FormEvent, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Button from 'src/components/common/Button';
import Input from 'src/components/common/Input';
import { ROUTES } from 'src/data/Routes';
import useAuthFunctions from 'src/hooks/useAuthFunctions';
import useAuthStore from 'src/hooks/useAuthStore';
import formStyles from 'src/styles/Form.module.css';
import typography from 'src/styles/Typography.module.css';

const RegisterForm = () => {
    const [email, setEmail] = useState('');

    const { handleRegister } = useAuthFunctions();
    const setLogin = useAuthStore((store) => store.login);

    const navigate = useNavigate();

    const registerHandler = async (event: FormEvent) => {
        event.preventDefault();

        handleRegister(email)
            .then(() => {
                setLogin(email);
                navigate(ROUTES.HOME);
            })
            .catch((err: string) => {
                toast.error(err);
            });
    };

    return (
        <form className={formStyles.container} onSubmit={registerHandler}>
            <h3 className={typography.subheading}>Register</h3>
            <Input
                type='email'
                value={email}
                onChangeText={setEmail}
                placeholder='Enter Email Address'
                variant='dark'
                required
            />
            <Button type='submit' text='Register' />
            <Link
                to={ROUTES.LOGIN}
                className={`${typography.link} ${typography.centered}`}
            >
                Already have an account? Login here!
            </Link>
        </form>
    );
};

export default RegisterForm;
