import React, { Fragment } from 'react';
import '@styles/styles.scss';
import styles from './styles.module.scss';

const Layout = ({ homepage = false, children }) => {
    return (
        <div className={styles.layout}>
            <main>{children}</main>
        </div>
    );
};

export default Layout;
