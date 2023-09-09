import React from 'react';
import styles from './page.module.css';

const Layout = ({children}) => {
    return (
        <div className='my-10'>
            <h1 className={styles.mainTitle}>Our Works</h1>
            {children}
        </div>
    );
};

export default Layout;