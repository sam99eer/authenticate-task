import Sidebar from 'src/components/common/Sidebar';
import styles from 'src/styles/DashboardLayout.module.css';
import type { T_Children } from 'src/types/general/Components';

const DashboardLayout = ({ children }: T_Children) => {
    return (
        <>
            <Sidebar />
            <main className={styles.holder}>{children}</main>
        </>
    );
};

export default DashboardLayout;
