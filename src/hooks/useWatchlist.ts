import { toast } from 'react-toastify';
import useAuthStore from 'src/hooks/useAuthStore';
import useIndexDb from 'src/hooks/useIndexDb';
import useWatchlistStore from 'src/hooks/useWatchlistStore';
import type { T_Movie } from 'src/types/api/Movie';
import type { T_IDB } from 'src/types/db';
import type { T_EditData } from 'src/types/general/Data';
import {
    T_StoreWatchlists,
    T_Watchlist,
    T_Watchlists,
} from 'src/types/hooks/Watchlist';
import { DB_TABLES } from 'src/utils/Constants';

const useWatchlist = () => {
    const { db, initDb } = useIndexDb();
    const {
        watchlist,
        setWatchlist,
        setWatchlists,
        createWatchlist,
        addToWatchlist,
        toggleWatched,
        updateWatchlist,
    } = useWatchlistStore();
    const email = useAuthStore((store) => store.email);

    const syncWatchlist = async (email: string) => {
        let localDb: T_IDB = null;

        if (!db) {
            localDb = await initDb();

            if (!localDb) return;
        }

        const idb = db ?? localDb;

        if (idb) {
            const watchlist = await idb.getAllFromIndex(
                DB_TABLES.WATCHLIST,
                'email',
                email
            );
            const watchlists = await idb.getAllFromIndex(
                DB_TABLES.WATCHLISTS,
                'email',
                email
            );

            const helper: T_StoreWatchlists[] = [];

            for (const watchlistItem of watchlists) {
                const watchlistData = watchlist.find(
                    (item) => item.watchlistId === watchlistItem.watchlistId
                );

                if (watchlistData) {
                    helper.push({
                        email: watchlistItem.email,
                        isWatched: watchlistItem.isWatched,
                        movie: watchlistItem.movie,
                        watchlistId: watchlistItem.watchlistId,
                        watchlistData,
                    });
                }
            }

            setWatchlist(watchlist);
            setWatchlists(helper);
        }
    };

    const addToWatchlistData = async (search: string, movie: T_Movie) => {
        if (db && email) {
            const watchlistData = watchlist.find(
                (item) => item.watchlistId === search
            );
            let watchlistId = '';

            if (!watchlistData) {
                const watchlistData: T_Watchlist = {
                    watchlistId: search,
                    title: search,
                    description: 'Your awesome movies list',
                    email,
                };
                const newWatchlistData = await db.add(
                    DB_TABLES.WATCHLIST,
                    watchlistData
                );

                if (newWatchlistData) {
                    watchlistId = search;
                    createWatchlist(watchlistData);
                }
            } else {
                watchlistId = watchlistData.watchlistId;
            }

            const watchlistsData: T_Watchlists = {
                email,
                isWatched: false,
                movie,
                watchlistId,
            };

            const newWatchlistsData = await db.add(
                DB_TABLES.WATCHLISTS,
                watchlistsData
            );

            if (typeof newWatchlistsData === 'number') {
                const storeWatchlistData: T_StoreWatchlists = {
                    ...watchlistsData,
                    watchlistData: watchlistData
                        ? watchlistData
                        : {
                              watchlistId: search,
                              title: search,
                              description: 'Your awesome movies list',
                              email,
                          },
                };

                addToWatchlist(storeWatchlistData);
            }
        }
    };

    const toggleIsWatched = async (movieId: string) => {
        if (db && email) {
            const transaction = db.transaction(
                DB_TABLES.WATCHLISTS,
                'readonly'
            );
            const store = transaction.store;
            const index = store.index('email');
            const emailCursor = await index.openCursor(email);
            let primaryKey = '';
            let movieData: T_Watchlists | null = null;

            while (emailCursor) {
                if (
                    emailCursor.value.movie.imdbID === movieId &&
                    emailCursor.value.email === email
                ) {
                    primaryKey = emailCursor.primaryKey;
                    movieData = emailCursor.value;
                    break;
                }
                await emailCursor.continue();
            }

            transaction.commit();

            if (movieData) {
                movieData.isWatched = !movieData.isWatched;
                await db.put(DB_TABLES.WATCHLISTS, movieData, primaryKey);
                toggleWatched(movieId);
                toast.success(
                    movieData.isWatched
                        ? 'Added to watched!'
                        : 'Removed from watched!'
                );
            }
        }
    };

    const updateWatchlistData = async (
        watchlistId: string,
        data: T_EditData
    ) => {
        if (db && email) {
            const transaction = db.transaction(DB_TABLES.WATCHLIST, 'readonly');
            const store = transaction.store;
            const index = store.index('email');
            const emailCursor = await index.openCursor(email);
            let primaryKey = '';

            while (emailCursor) {
                if (emailCursor.value.watchlistId === watchlistId) {
                    primaryKey = emailCursor.primaryKey;
                    break;
                }
                await emailCursor.continue();
            }

            transaction.commit();

            const result = await db.put(
                DB_TABLES.WATCHLIST,
                {
                    watchlistId,
                    title: data.title,
                    description: data.description,
                    email,
                },
                primaryKey
            );

            if (result) {
                updateWatchlist(watchlistId, data);
            }
        }
    };

    return {
        syncWatchlist,
        addToWatchlistData,
        toggleIsWatched,
        updateWatchlistData,
    };
};

export default useWatchlist;
