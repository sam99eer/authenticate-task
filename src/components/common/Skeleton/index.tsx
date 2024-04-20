import styles from 'src/styles/Skeleton.module.css';
import type { T_Skeleton } from 'src/types/general/Components';

const Skeleton = ({ rounded, verticalSpacing }: T_Skeleton) => {
    return (
        <div
            className={`${styles.card} ${rounded ? styles.rounded : ''} ${
                verticalSpacing ? styles.spaced : ''
            }`}
        >
            <div className={`${styles.cardImg} ${styles.skeleton}`} />
            <div className={styles.cardBody}>
                <p className={`${styles.cardText} ${styles.skeleton}`} />
            </div>
        </div>
    );
};

export default Skeleton;
