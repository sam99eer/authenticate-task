import type { T_Auth } from 'src/types/hooks/Auth';
import { create } from 'zustand';

const useAuthStore = create<T_Auth>((set) => ({
    email: null,
    isLoggedIn: false,
    login: (email: string) =>
        set((prevState) => ({ ...prevState, email, isLoggedIn: true })),
    logout: () =>
        set((prevState) => ({ ...prevState, email: null, isLoggedIn: false })),
}));

export default useAuthStore;
