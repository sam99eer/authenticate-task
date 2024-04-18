import { ChangeEvent } from 'react';
import styles from 'src/styles/Input.module.css';
import type { T_Input } from 'src/types/general/Components';

const Input = (props: T_Input) => {
    const changeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        props.onChangeText(event.target.value);
    };

    return (
        <div
            className={`${styles.container} ${
                props.hasIcon ? styles.withIcon : ''
            } ${props.variant === 'light' ? styles.light : ''}`}
        >
            {props.hasIcon ? props.icon : null}
            <input
                type={props.type}
                value={props.value}
                onChange={changeHandler}
                {...(props.placeholder
                    ? { placeholder: props.placeholder }
                    : {})}
            />
        </div>
    );
};

export default Input;
