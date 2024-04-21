import { HTMLInputTypeAttribute, ReactNode, SVGProps } from 'react';
import type { T_Movie } from 'src/types/api/Movie';
import type { T_Route } from 'src/types/general/Routes';

export type T_Skeleton = {
    rounded?: boolean;
    verticalSpacing?: boolean;
};

export type T_SidebarItem = {
    path: T_Route;
    text: string;
    icon: ReactNode;
};

export type T_Children = {
    children: ReactNode;
};

type T_InputProps = {
    onChangeText: (data: string) => void;
    variant: 'dark' | 'light';
    type: HTMLInputTypeAttribute;
    value: string;
    placeholder?: string;
    required?: boolean;
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
    onClick?: () => void;
    isSmall?: boolean;
    type?: 'button' | 'reset' | 'submit';
};

export type T_Emoji = 'sad' | 'smile' | 'love';

export type T_Svg = SVGProps<SVGSVGElement> & {
    isActive: boolean;
};

export type T_Modal = {
    children: ReactNode;
    onClose: () => void;
};

export type T_EditModal = {
    editToggle: () => void;
    title: string;
    description: string;
    watchlistId: string | undefined;
};

export type T_Skeletons = {
    total: number;
};

export type T_WishlistMovieCard = {
    mode: 'wishlist';
    search: string;
};

export type T_WatchlistMovieCard = {
    mode: 'watchlist';
};

export type T_MovieCard = {
    data: T_Movie;
} & (T_WishlistMovieCard | T_WatchlistMovieCard);
