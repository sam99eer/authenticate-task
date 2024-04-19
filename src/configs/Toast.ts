import { Bounce, ToastContainerProps } from 'react-toastify';

export const toastProps: ToastContainerProps = {
    position: 'top-right',
    autoClose: 2500,
    hideProgressBar: false,
    newestOnTop: false,
    closeOnClick: true,
    rtl: false,
    pauseOnFocusLoss: false,
    draggable: true,
    pauseOnHover: true,
    theme: 'colored',
    transition: Bounce,
    icon: false,
};
