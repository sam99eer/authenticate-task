type T_LoggedIn = {
    email: string;
    isLoggedIn: true;
};

type T_NotLoggedIn = {
    email: null;
    isLoggedIn: false;
};

export type T_Auth = {
    login: (email: string) => void;
    logout: () => void;
} & (T_LoggedIn | T_NotLoggedIn);
