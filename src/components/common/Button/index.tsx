import styles from 'src/styles/Button.module.css';
import type { T_Button } from 'src/types/general/Components';

const Button = ({ text, isSmall, onClick }: T_Button) => {
    return (
        <button
            className={`${styles.button} ${isSmall ? styles.small : ''}`}
            onClick={onClick}
        >
            {text}
        </button>
    );
};

export default Button;
