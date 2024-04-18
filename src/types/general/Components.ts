import { ReactNode } from 'react';
import type { T_Route } from 'src/types/general/Routes';

export type T_Skeleton = {
    height: number;
    rounded?: boolean;
    verticalSpacing?: boolean;
};

export type T_SidebarItem = {
    path: T_Route;
    text: string;
    icon: ReactNode;
};
