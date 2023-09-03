import React from 'react';
import styles from "./button.module.css";
import Link from 'next/link';

const Button = ({url, text}) => {
    return (
        <div>
            <Link href={url}>
                <button className={styles.container}>{text}</button>
            </Link>
        </div>
    );
};

export default Button;