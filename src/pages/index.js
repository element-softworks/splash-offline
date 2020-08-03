import React, { Fragment } from 'react';
import '@styles/styles.scss';
import styles from './styles.module.scss';
import Logo from '@images/logo.svg';

const Home = () => {
    return (
        <Fragment>
            <div className={styles.offline}>
                <div className={styles.offlineContent}>
                    <div className={styles.offlineLogo}>
                        <Logo />
                    </div>
                    <h1>Sorry, this website is offline right now.</h1>
                    <p>Contact the system administrator at <a href="mailto:support@merlinpanel.com">support@merlinpanel.com</a> for more information.</p>
                </div>
                <footer><p>This website was created by <a href="https://elementsoftworks.co.uk">Element Softworks Ltd.</a></p></footer>
            </div>
        </Fragment>
    )
};

export default Home;
