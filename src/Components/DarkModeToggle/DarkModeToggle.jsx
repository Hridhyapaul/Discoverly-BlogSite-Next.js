import React from 'react';
import styles from './DarkModeToggle.module.css';

const DarkModeToggle = () => {
    return (
        <div className={styles.contaier}>
            <div className={styles.icon}>🌙</div>
            <div className={styles.icon}>🔆</div>
            <div className={styles.ball}/>
        </div>
    );
};

export default DarkModeToggle;