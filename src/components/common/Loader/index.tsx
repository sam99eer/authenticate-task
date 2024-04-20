import { createPortal } from 'react-dom';
import styles from 'src/styles/Loader.module.css';
import typography from 'src/styles/Typography.module.css';

const Loader = () => {
    return createPortal(
        <div className={styles.container}>
            <div className={styles.banner}>
                <h1 className={`${typography.heading} ${typography.primary}`}>
                    WATCHLISTS
                </h1>
                <div className={styles.bannerLeft}></div>
                <div className={styles.bannerRight}></div>
            </div>
        </div>,
        document.getElementById('loader')!
    );
};

export default Loader;
