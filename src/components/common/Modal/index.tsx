import { MouseEvent } from 'react';
import { createPortal } from 'react-dom';
import styles from 'src/styles/Modal.module.css';
import type { T_Modal } from 'src/types/general/Components';

const Modal = ({ children, onClose }: T_Modal) => {
    const childHandler = (event: MouseEvent<HTMLDivElement>) => {
        event.stopPropagation();
    };

    return createPortal(
        <div role='dialog' className={styles.container} onClick={onClose}>
            <div className={styles.content} onClick={childHandler}>
                {children}
            </div>
        </div>,
        document.getElementById('modal')!
    );
};

export default Modal;
