import MovieCard from 'src/components/common/MovieCard';
import styles from 'src/styles/Watchlist.module.css';

const WatchlistItems = () => {
    return (
        <div className={styles.watchBox}>
            <MovieCard />
            <MovieCard />
            <MovieCard />
            <MovieCard />
        </div>
    );
};

export default WatchlistItems;
