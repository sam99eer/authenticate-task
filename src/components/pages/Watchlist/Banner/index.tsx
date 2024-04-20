import { useState } from 'react';
import Edit from 'src/assets/svg/Edit';
import EditModal from 'src/components/pages/Watchlist/EditModal';
import typography from 'src/styles/Typography.module.css';
import styles from 'src/styles/Watchlist.module.css';

const Banner = () => {
    const [editMode, setEditMode] = useState(false);

    const toggleEditHandler = () => {
        setEditMode((prevState) => !prevState);
    };

    return (
        <>
            {editMode && (
                <EditModal
                    title='s'
                    description='ss'
                    editToggle={toggleEditHandler}
                />
            )}

            <div className={styles.topRow}>
                <h1 className={typography.heading}>Movies by Sameer</h1>
                <Edit onClick={toggleEditHandler} />
            </div>

            <div className={styles.descriptionBox}>
                <h3 className={typography.subheading}>About this watchlist</h3>
                <p className={typography.paragraph}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. In,
                    est? Harum maiores ut modi voluptatem, eligendi nemo ducimus
                    minima suscipit commodi, dolor ratione?
                </p>
            </div>
        </>
    );
};

export default Banner;
