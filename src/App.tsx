import { useEffect, useState } from 'react';
import { QueryClientProvider } from 'react-query';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loader from 'src/components/common/Loader';
import { queryClient } from 'src/configs/ReactQuery';
import { toastProps } from 'src/configs/Toast';
import useAuthStore from 'src/hooks/useAuthStore';
import Routes from 'src/routes';
import { CONSTANTS } from 'src/utils/Constants';

const App = () => {
    const [loading, setLoading] = useState(true);
    const setLogin = useAuthStore((store) => store.login);

    useEffect(() => {
        const localEmail = localStorage.getItem(CONSTANTS.LOCAL_EMAIL);

        if (localEmail) {
            setLogin(localEmail);
        }

        setLoading(false);
    }, []);

    if (loading) {
        return <Loader />;
    }

    return (
        <>
            <QueryClientProvider client={queryClient}>
                <Routes />
            </QueryClientProvider>
            <ToastContainer {...toastProps} />
        </>
    );
};

export default App;
