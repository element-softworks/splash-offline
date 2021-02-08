import React, { Fragment } from 'react';
import '@styles/styles.scss';
import styles from './styles.module.scss';
import Logo from '@images/logo.svg';
import SEO from '@components/SEO';
import Layout from '@components/Layout';
import Hero from '@components/Hero';
import Winners from '@components/Winners';
import { graphql, useStaticQuery } from 'gatsby';
import SubscribeCTA from '@components/SubscribeCTA';
import Container from '@components/Container';
import Button from '@components/Button';

const Home = () => {
    return (
        <Layout header={false}>
            <SEO />
            <Hero />
            <Winners />
            <div className={styles.livestreamWrapper}>
                <div className={styles.livestreamContainer}>
                    <h3>Watch Last Year's Award Ceremony</h3>
                    <Button
                        text="Watch the Livestream on Youtube"
                        link="https://www.youtube.com/watch?v=2_XL1LD9frc&feature=youtu.be"
                    />
                </div>
                <div className={styles.livestreamVideo}>
                    <iframe
                        width="560"
                        height="349"
                        src="https://www.youtube.com/embed/2_XL1LD9frc?autoplay=0"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    />
                </div>
            </div>
            <div className={styles.ctaContainer}>
                <h3>Subscribe to our mailing list to be the first to know about Gundies 2022</h3>
                <SubscribeCTA />
            </div>
        </Layout>
    );
};

export default Home;
