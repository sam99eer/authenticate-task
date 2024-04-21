import type { T_WatchlistStore } from 'src/types/hooks/Watchlist';
import { create } from 'zustand';

const useWatchlistStore = create<T_WatchlistStore>((set) => ({
    watchlist: [],
    watchlists: [],
    setWatchlist: (watchlist) => set(() => ({ watchlist })),
    setWatchlists: (watchlists) => set(() => ({ watchlists })),
    createWatchlist: (watchlistData) =>
        set((prevState) => ({
            watchlist: [watchlistData, ...prevState.watchlist],
        })),
    addToWatchlist: (watchlistItem) =>
        set((prevState) => ({
            watchlists: [watchlistItem, ...prevState.watchlists],
        })),
    toggleWatched: (movieId) =>
        set((prevState) => {
            const movieIndex = prevState.watchlists.findIndex(
                (item) => item.movie.imdbID === movieId
            );

            if (movieIndex >= 0) {
                const newWatchlists = [...prevState.watchlists];
                newWatchlists[movieIndex].isWatched =
                    !newWatchlists[movieIndex].isWatched;
                return {
                    watchlists: newWatchlists,
                };
            }
            return prevState;
        }),
    updateWatchlist: (watchlistId, data) =>
        set((prevState) => {
            const watchlistIndex = prevState.watchlist.findIndex(
                (item) => item.watchlistId === watchlistId
            );

            if (watchlistIndex >= 0) {
                const newWatchlist = [...prevState.watchlist];
                newWatchlist[watchlistIndex].title = data.title;
                newWatchlist[watchlistIndex].description = data.description;

                return { watchlist: newWatchlist };
            }

            return prevState;
        }),
}));

export default useWatchlistStore;
