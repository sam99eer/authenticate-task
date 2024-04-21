import { useNavigate } from 'react-router-dom';
import { ROUTES } from 'src/data/Routes';
import styles from 'src/styles/ListItem.module.css';
import typography from 'src/styles/Typography.module.css';
import type { T_Watchlist } from 'src/types/hooks/Watchlist';
import { getWatchlistLogo } from 'src/utils/Helpers';

const ListItem = ({ ...data }: T_Watchlist) => {
    const navigate = useNavigate();

    const navigateHandler = () => {
        navigate(ROUTES.WATCHLIST + data.watchlistId);
    };

    return (
        <div
            className={styles.container}
            role='button'
            onClick={navigateHandler}
        >
            <div className={styles.firstItem}>
                <p className={`${typography.subheading} ${typography.white}`}>
                    {getWatchlistLogo(data.title)}
                </p>
            </div>
            <p className={`${typography.paragraph} ${typography.clipText}`}>
                {data.title}
            </p>
        </div>
    );
};

export default ListItem;
