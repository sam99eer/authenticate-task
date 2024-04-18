import { T_Auth } from 'src/types/store/Auth';
import { create } from 'zustand';

const useAuthStore = create<T_Auth>((set) => ({
    email: null,
    isLoggedIn: false,
    login: (email: string) => set(() => ({ email, isLoggedIn: true })),
    logout: () => set({ email: null, isLoggedIn: false }),
}));

export default useAuthStore;
