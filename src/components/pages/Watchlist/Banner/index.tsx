import { useMemo, useState } from 'react';
import { useParams } from 'react-router-dom';
import Edit from 'src/assets/svg/Edit';
import EditModal from 'src/components/pages/Watchlist/EditModal';
import useWatchlistStore from 'src/hooks/useWatchlistStore';
import typography from 'src/styles/Typography.module.css';
import styles from 'src/styles/Watchlist.module.css';

const Banner = () => {
    const [editMode, setEditMode] = useState(false);

    const { watchlistId } = useParams();
    const watchlist = useWatchlistStore((store) => store.watchlist);

    const filteredWatchlist = useMemo(
        () =>
            watchlistId
                ? watchlist.find((item) => item.watchlistId === watchlistId)
                : null,
        [watchlistId, watchlist]
    );

    const toggleEditHandler = () => {
        setEditMode((prevState) => !prevState);
    };

    return (
        <>
            {editMode && (
                <EditModal
                    title={filteredWatchlist?.title ?? ''}
                    description={filteredWatchlist?.description ?? ''}
                    editToggle={toggleEditHandler}
                    watchlistId={watchlistId}
                />
            )}

            <div className={styles.topRow}>
                <h1 className={typography.heading}>
                    {filteredWatchlist?.title ?? ''}
                </h1>
                <Edit onClick={toggleEditHandler} />
            </div>

            <div className={styles.descriptionBox}>
                <h3 className={typography.subheading}>About this watchlist</h3>
                <p className={typography.paragraph}>
                    {filteredWatchlist?.description ?? ''}
                </p>
            </div>
        </>
    );
};

export default Banner;
