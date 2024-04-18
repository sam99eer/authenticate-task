import styles from 'src/styles/ListItem.module.css';
import typography from 'src/styles/Typography.module.css';

const ListItem = () => {
    return (
        <div className={styles.container} role='button'>
            <div className={styles.firstItem}>
                <p className={`${typography.subheading} ${typography.white}`}>
                    M
                </p>
            </div>
            <p className={`${typography.paragraph} ${typography.clipText}`}>
                Movies by Tom Cruise
            </p>
        </div>
    );
};

export default ListItem;
