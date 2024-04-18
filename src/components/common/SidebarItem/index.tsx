import { useLocation, useNavigate } from 'react-router-dom';
import styles from 'src/styles/Sidebar.module.css';
import typography from 'src/styles/Typography.module.css';
import type { T_SidebarItem } from 'src/types/general/Components';

const SidebarItem = ({ icon, path, text }: T_SidebarItem) => {
    const navigate = useNavigate();
    const { pathname } = useLocation();
    const isActivePath = pathname === path;

    const navigateHandler = () => {
        if (isActivePath) return;
        navigate(path);
    };

    return (
        <div
            className={`${styles.sidebarItem} ${
                isActivePath ? styles.active : ''
            }`}
            role='button'
            onClick={navigateHandler}
        >
            {icon}
            <p
                className={`${typography.paragraph} ${
                    isActivePath ? typography.white : ''
                }`}
            >
                {text}
            </p>
        </div>
    );
};

export default SidebarItem;
