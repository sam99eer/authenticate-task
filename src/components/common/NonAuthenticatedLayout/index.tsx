import styles from 'src/styles/NonAuthenticatedLayout.module.css';
import typography from 'src/styles/Typography.module.css';
import type { T_Children } from 'src/types/general/Components';

const NotAuthenticatedLayout = ({ children }: T_Children) => {
    return (
        <div className={styles.container}>
            <h1 className={`${typography.heading} ${typography.centered}`}>
                Welcome to{' '}
                <span className={typography.primary}>Watchlists</span>
            </h1>
            <main>{children}</main>
        </div>
    );
};

export default NotAuthenticatedLayout;
