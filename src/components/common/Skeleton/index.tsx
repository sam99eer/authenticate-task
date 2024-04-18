import styles from '@/styles/Skeleton.module.css';
import type { T_Skeleton } from 'src/types/general/Components';

const Skeleton = ({ height, rounded, verticalSpacing }: T_Skeleton) => {
    return (
        <div
            className={`${styles.card} ${styles.skeleton} ${
                rounded ? styles.rounded : ''
            } ${verticalSpacing ? styles.spaced : ''}`}
            style={{ paddingBottom: height }}
        />
    );
};

export default Skeleton;
