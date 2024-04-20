import { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import Bookmark from 'src/assets/svg/Bookmark';
import Tick from 'src/assets/svg/Tick';
import { ROUTES } from 'src/data/Routes';
import styles from 'src/styles/MovieCard.module.css';
import typography from 'src/styles/Typography.module.css';
import type { T_Emoji, T_MovieCard } from 'src/types/general/Components';
import { getRandomRating } from 'src/utils/Helpers';
import { EMOJI_MAP } from 'src/utils/Mappers';

const MovieCard = ({ data, mode }: T_MovieCard) => {
    const navigate = useNavigate();

    const rating = getRandomRating();

    const emojiStatus: T_Emoji =
        rating > 75 ? 'love' : rating > 40 ? 'smile' : 'sad';

    const ratingIcon = useMemo(() => EMOJI_MAP.get(emojiStatus), [emojiStatus]);

    const navigateHandler = () => {
        navigate(ROUTES.MOVIE + data.imdbID);
    };

    return (
        <div className={styles.card} onClick={navigateHandler}>
            {mode === 'wishlist' && (
                <div className={`${styles.btn} ${styles.leftBtn}`}>
                    <Bookmark />
                </div>
            )}

            {mode === 'watchlist' && (
                <div className={`${styles.btn} ${styles.rightBtn}`}>
                    <Tick isActive />
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
