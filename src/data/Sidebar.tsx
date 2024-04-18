import Home from 'src/assets/svg/Home';
import { ROUTES } from 'src/data/Routes';
import type { T_SidebarItem } from 'src/types/general/Components';

export const SIDEBAR_DATA: T_SidebarItem[] = [
    {
        text: 'Home',
        path: ROUTES.HOME,
        icon: <Home />,
    },
];
