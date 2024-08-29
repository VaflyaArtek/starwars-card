import React from 'react';
import styles from './styles/Button.module.css';
import { ButtonProps } from "../../types/props-types.ts";

const Button: React.FC<ButtonProps> = ({ onClick, children }) => {
    return (
        <button onClick={onClick} className={styles.button}>
            {children}
        </button>
    );
}

export default Button;
