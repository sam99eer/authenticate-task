import { useEffect, useState } from 'react';
import { QueryClientProvider } from 'react-query';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loader from 'src/components/common/Loader';
import { queryClient } from 'src/configs/ReactQuery';
import { toastProps } from 'src/configs/Toast';
import useAuthFunctions from 'src/hooks/useAuthFunctions';
import useAuthStore from 'src/hooks/useAuthStore';
import Routes from 'src/routes';
import { CONSTANTS } from 'src/utils/Constants';

const App = () => {
    const [loading, setLoading] = useState(true);

    const setLogin = useAuthStore((store) => store.login);
    const { handleLogin } = useAuthFunctions();

    useEffect(() => {
        (async function checkIsLoggedIn() {
            try {
                const localEmail = localStorage.getItem(CONSTANTS.LOCAL_EMAIL);

                if (localEmail) {
                    const email = await handleLogin(localEmail);
                    setLogin(email);
                }
            } catch (err) {
                toast.error(`${err}`);
                localStorage.removeItem(CONSTANTS.LOCAL_EMAIL);
            } finally {
                setLoading(false);
            }
        })();
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
