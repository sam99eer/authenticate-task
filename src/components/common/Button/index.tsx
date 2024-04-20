import { forwardRef, Ref } from 'react';
import styles from 'src/styles/Button.module.css';
import type { T_Button } from 'src/types/general/Components';

const Button = forwardRef(
    (
        { text, isSmall, type, onClick }: T_Button,
        ref: Ref<HTMLButtonElement>
    ) => {
        return (
            <button
                type={type ?? 'button'}
                className={`${styles.button} ${isSmall ? styles.small : ''}`}
                onClick={onClick}
                ref={ref}
            >
                {text}
            </button>
        );
    }
);

export default Button;
