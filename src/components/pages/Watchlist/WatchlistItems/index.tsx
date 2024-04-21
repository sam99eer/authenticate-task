import { useMemo } from 'react';
import { useParams } from 'react-router-dom';
import MovieCard from 'src/components/common/MovieCard';
import useWatchlistStore from 'src/hooks/useWatchlistStore';
import styles from 'src/styles/Watchlist.module.css';

const WatchlistItems = () => {
    const { watchlistId } = useParams();
    const watchlists = useWatchlistStore((store) => store.watchlists);

    const filteredWatchlists = useMemo(
        () =>
            watchlistId
                ? watchlists.filter((item) => item.watchlistId === watchlistId)
                : [],
        [watchlistId, watchlists.length]
    );

    return (
        <div className={styles.watchBox}>
            {filteredWatchlists.map((item) => (
                <MovieCard
                    key={item.movie.imdbID}
                    data={item.movie}
                    mode='watchlist'
                />
            ))}
        </div>
    );
};

export default WatchlistItems;
