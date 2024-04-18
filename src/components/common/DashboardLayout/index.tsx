import Sidebar from 'src/components/common/Sidebar';
import styles from 'src/styles/DashboardLayout.module.css';
import type { T_DashboardLayout } from 'src/types/general/Components';

const DashboardLayout = ({ children }: T_DashboardLayout) => {
    return (
        <>
            <Sidebar />
            <main className={styles.holder}>{children}</main>
        </>
    );
};

export default DashboardLayout;
