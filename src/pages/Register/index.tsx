import NotAuthenticatedLayout from 'src/components/common/NonAuthenticatedLayout';
import RegisterForm from 'src/components/pages/Register/RegisterForm';

const Register = () => {
    return (
        <NotAuthenticatedLayout>
            <RegisterForm />
        </NotAuthenticatedLayout>
    );
};

export default Register;
