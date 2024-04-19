import { useEffect, useRef, useState } from 'react';
import HorizontalDots from 'src/assets/svg/HorizontalDots';
import Logout from 'src/assets/svg/Logout';
import UserAvatar from 'src/assets/svg/UserAvatar';
import useAuthStore from 'src/hooks/useAuthStore';
import styles from 'src/styles/LoggedUser.module.css';
import typography from 'src/styles/Typography.module.css';

const LoggedUser = () => {
    const [visible, setVisible] = useState(false);
    const popoverRef = useRef<HTMLDivElement | null>(null);

    const logoutHandler = useAuthStore((store) => store.logout);

    const toggleHandler = () => {
        setVisible((prevState) => !prevState);
    };

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                popoverRef.current &&
                !popoverRef.current.contains(event.target as Node)
            ) {
                toggleHandler();
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className={styles.relative}>
            {/* Popup */}
            {visible && (
                <div className={styles.popover} ref={popoverRef}>
                    <div
                        className={styles.popoverItem}
                        role='button'
                        onClick={logoutHandler}
                    >
                        <Logout />
                        <p className={typography.paragraph}>Logout</p>
                    </div>
                </div>
            )}

            <div className={styles.container}>
                <div className={styles.holder}>
                    <UserAvatar />
                    <p className={typography.paragraph}>GUEST</p>
                </div>
                <HorizontalDots onClick={toggleHandler} />
            </div>
        </div>
    );
};

export default LoggedUser;
