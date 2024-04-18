import { QueryClientProvider } from 'react-query';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { queryClient } from 'src/configs/ReactQuery';
import { toastProps } from 'src/configs/Toast';
import Routes from 'src/routes';

const App = () => {
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
