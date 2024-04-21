import { MouseEvent, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Bookmark from 'src/assets/svg/Bookmark';
import Tick from 'src/assets/svg/Tick';
import { ROUTES } from 'src/data/Routes';
import useWatchlist from 'src/hooks/useWatchlist';
import useWatchlistStore from 'src/hooks/useWatchlistStore';
import styles from 'src/styles/MovieCard.module.css';
import typography from 'src/styles/Typography.module.css';
import type { T_Emoji, T_MovieCard } from 'src/types/general/Components';
import { getRandomRating } from 'src/utils/Helpers';
import { EMOJI_MAP } from 'src/utils/Mappers';

const MovieCard = (props: T_MovieCard) => {
    const { data, mode } = props;

    const navigate = useNavigate();
    const rating = useMemo(() => getRandomRating(), []);

    const { addToWatchlistData, toggleIsWatched } = useWatchlist();
    const watchlistsData = useWatchlistStore((store) => store.watchlists);

    const localMovieData = useMemo(
        () => watchlistsData.find((item) => item.movie.imdbID === data.imdbID),
        [props.data.imdbID, watchlistsData]
    );

    const emojiStatus: T_Emoji =
        rating > 75 ? 'love' : rating > 40 ? 'smile' : 'sad';

    const ratingIcon = useMemo(() => EMOJI_MAP.get(emojiStatus), [emojiStatus]);

    const navigateHandler = () => {
        navigate(ROUTES.MOVIE + data.imdbID);
    };

    const wishlistHandler = (event: MouseEvent<HTMLDivElement>) => {
        event.stopPropagation();

        if (mode === 'wishlist') {
            addToWatchlistData(props.search.toLowerCase(), data);
            toast.success('Added to watchlist!');
        }
    };

    const toggleHandler = (event: MouseEvent<HTMLDivElement>) => {
        event.stopPropagation();

        if (mode === 'watchlist') {
            toggleIsWatched(data.imdbID);
        }
    };

    return (
        <div className={styles.card} onClick={navigateHandler}>
            {mode === 'wishlist' && !!localMovieData === false && (
                <div
                    className={`${styles.btn} ${styles.leftBtn}`}
                    onClick={wishlistHandler}
                >
                    <Bookmark />
                </div>
            )}

            {mode === 'watchlist' && (
                <div
                    className={`${styles.btn} ${styles.rightBtn}`}
                    onClick={toggleHandler}
                >
                    <Tick isActive={!!localMovieData?.isWatched} />
                </div>
            )}

            <img src={data.Poster} className={styles.img} />

            <div className={styles.rating}>
                {ratingIcon}
                <div className={styles.rate}>
                    <h3 className={typography.subheading}>{rating}</h3>
                    <p className={typography.small}>/100</p>
                </div>
            </div>

            <div className={styles.content}>
                <h3 className={typography.subheading}>{data.Title}</h3>
                <p className={`${typography.paragraph} ${typography.grey}`}>
                    ({data.Year})
                </p>
            </div>
        </div>
    );
};

export default MovieCard;
