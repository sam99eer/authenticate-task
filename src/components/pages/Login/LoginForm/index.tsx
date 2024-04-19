import { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from 'src/components/common/Button';
import Input from 'src/components/common/Input';
import { ROUTES } from 'src/data/Routes';
import formStyles from 'src/styles/Form.module.css';
import typography from 'src/styles/Typography.module.css';

const LoginForm = () => {
    const [email, setEmail] = useState('');

    return (
        <>
            <form className={formStyles.container}>
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
