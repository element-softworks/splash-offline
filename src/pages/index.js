import React, { Fragment } from 'react';
import '@styles/styles.scss';
import styles from './styles.module.scss';
import Logo from '@images/logo.svg';
import SEO from '@components/SEO';
import Layout from '@components/Layout';
import Hero from '@components/Hero';

const Home = () => {
    return (
        <Layout>
            <SEO />
            <Hero />
            {/*<div className={styles.offline}>*/}
            {/*    <div className={styles.offlineContent}>*/}
            {/*        <div>*/}
            {/*            <div className={styles.offlineLogo}>*/}
            {/*                <Logo />*/}
            {/*            </div>*/}
            {/*            <h1>The 2nd Annual Gundies Awards</h1>*/}
            {/*            <p>Coming 3rd November</p>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*    <footer><p>By <a href="https://forgerelations.com">Forge Relations</a> and <a href="https://elementsoftworks.co.uk">Element Softworks Ltd.</a></p></footer>*/}
            {/*</div>*/}
        </Layout>
    );
};

export default Home;
