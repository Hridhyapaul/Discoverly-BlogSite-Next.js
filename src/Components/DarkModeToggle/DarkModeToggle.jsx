import React from 'react';
import styles from './DarkModeToggle.module.css';

const DarkModeToggle = () => {
    const mode = "light"
    return (
        <div className={styles.container}>
            <div className={styles.icon}>🌙</div>
            <div className={styles.icon}>🔆</div>
            <div className={styles.ball} style={mode === "light" ? { left: "4px" } : { right: "4px" }}/>
        </div>
    );
};

export default DarkModeToggle;