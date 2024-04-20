import type { T_Auth } from 'src/types/hooks/Auth';
import { CONSTANTS } from 'src/utils/Constants';
import { create } from 'zustand';

const useAuthStore = create<T_Auth>((set) => ({
    email: null,
    isLoggedIn: false,
    login: (email: string) => {
        localStorage.setItem(CONSTANTS.LOCAL_EMAIL, email);
        set((prevState) => ({ ...prevState, email, isLoggedIn: true }));
    },
    logout: () => {
        localStorage.removeItem(CONSTANTS.LOCAL_EMAIL);
        set((prevState) => ({ ...prevState, email: null, isLoggedIn: false }));
    },
}));

export default useAuthStore;
