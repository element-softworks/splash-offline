import React, { Fragment } from 'react';
import styles from './styles.module.scss';
import Button from '@components/Button';

const SubscribeCTA = () => {
    return (
        <div className={styles.subscribeCtaWrapper}>
            <div className={styles.inputBox}>
                <label htmlFor="search">Email</label>
                <input
                    type="text"
                    name="email"
                    // onChange={onChange}
                    value={''}
                    placeholder="Email"
                />
            </div>
            <Button text="Subscribe" />
        </div>
    );
};

export default SubscribeCTA;
