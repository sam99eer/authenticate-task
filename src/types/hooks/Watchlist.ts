import type { T_Movie } from 'src/types/api/Movie';
import type { T_EditData } from 'src/types/general/Data';

export type T_Watchlist = {
    watchlistId: string;
    email: string;
    title: string;
    description: string;
};

export type T_Watchlists = {
    email: string;
    watchlistId: string;
    isWatched: boolean;
    movie: T_Movie;
};

export type T_StoreWatchlists = T_Watchlists & {
    watchlistData: T_Watchlist;
};

export type T_WatchlistStore = {
    watchlist: T_Watchlist[];
    watchlists: T_StoreWatchlists[];
    createWatchlist: (watchlistData: T_Watchlist) => void;
    addToWatchlist: (watchlistItem: T_StoreWatchlists) => void;
    setWatchlist: (watchlist: T_Watchlist[]) => void;
    setWatchlists: (watchlists: T_StoreWatchlists[]) => void;
    toggleWatched: (movieId: string) => void;
    updateWatchlist: (watchlistId: string, data: T_EditData) => void;
};
