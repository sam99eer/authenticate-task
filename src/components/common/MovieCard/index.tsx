import { useMemo } from 'react';
import Bookmark from 'src/assets/svg/Bookmark';
import Tick from 'src/assets/svg/Tick';
import styles from 'src/styles/MovieCard.module.css';
import typography from 'src/styles/Typography.module.css';
import type { T_Emoji } from 'src/types/general/Components';
import { EMOJI_MAP } from 'src/utils/Mappers';

const MovieCard = () => {
    const rating = 90;
    const emojiStatus: T_Emoji =
        rating > 75 ? 'love' : rating > 50 ? 'smile' : 'sad';
    const ratingIcon = useMemo(() => EMOJI_MAP.get(emojiStatus), [emojiStatus]);
    return (
        <div className={styles.card}>
            <div className={`${styles.btn} ${styles.leftBtn}`}>
                <Bookmark />
            </div>
            <div className={`${styles.btn} ${styles.rightBtn}`}>
                <Tick isActive />
            </div>
            <img src='https://placehold.co/600x400' className={styles.img} />
            <div className={styles.rating}>
                {ratingIcon}
                <div className={styles.rate}>
                    <h3 className={typography.subheading}>90</h3>
                    <p className={typography.small}>/100</p>
                </div>
            </div>
            <div className={styles.content}>
                <h3 className={typography.subheading}>Top Gun Maverick</h3>
                <p className={`${typography.paragraph} ${typography.grey}`}>
                    (2022)
                </p>
            </div>
        </div>
    );
};

export default MovieCard;
