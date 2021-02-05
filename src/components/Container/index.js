import React, { Fragment } from 'react';
import '@styles/styles.scss';
import styles from './styles.module.scss';

const Container = ({ children }) => {
    return <div className={styles.containerWrapper}>{children}</div>;
};

export default Container;
