import { HTMLInputTypeAttribute, ReactNode } from 'react';
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

export type T_DashboardLayout = {
    children: ReactNode;
};

type T_InputProps = {
    onChangeText: (data: string) => void;
    variant: 'dark' | 'light';
    type: HTMLInputTypeAttribute;
    value: string;
    placeholder?: string;
};

type T_InputWithIcon = {
    hasIcon: true;
    icon: ReactNode;
};

type T_InputWithoutIcon = {
    hasIcon?: false;
};

export type T_Input = T_InputProps & (T_InputWithIcon | T_InputWithoutIcon);

export type T_Button = {
    text: string;
    onClick: () => void;
    isSmall?: boolean;
};
