import React from 'react';
import styles from './styles/Button.module.css';

interface ButtonProps {
    children: React.ReactNode;
    handleClick?: () => void;
    id?: number;
}

const Button: React.FC<ButtonProps> = React.memo(({children, handleClick, id}) => {
    console.log('rendered');
    return (
        <button onClick={handleClick} className={styles.button} disabled={id !== undefined && id <= 1}>
            {children}
        </button>
    );
}, (prevProps, nextProps) => {
    return prevProps.id === nextProps.id && prevProps.handleClick === nextProps.handleClick;
});

export default Button;
