import { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from 'src/components/common/Button';
import Input from 'src/components/common/Input';
import { ROUTES } from 'src/data/Routes';
import formStyles from 'src/styles/Form.module.css';
import typography from 'src/styles/Typography.module.css';

const RegisterForm = () => {
    const [email, setEmail] = useState('');

    return (
        <>
            <form className={formStyles.container}>
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
        </>
    );
};

export default RegisterForm;
