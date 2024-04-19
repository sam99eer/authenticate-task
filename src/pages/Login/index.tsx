import NotAuthenticatedLayout from 'src/components/common/NonAuthenticatedLayout';
import LoginForm from 'src/components/pages/Login/LoginForm';

const Login = () => {
    return (
        <NotAuthenticatedLayout>
            <LoginForm />
        </NotAuthenticatedLayout>
    );
};

export default Login;
