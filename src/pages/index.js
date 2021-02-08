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

const Home = () => {
    return (
        <Layout header={false}>
            <SEO />
            <Hero />
            <Winners />
            <Container>
                <div className={styles.ctaContainer}>
                    <h3>
                        Subscribe to our mailing list to be the first to know about Gundies 2022
                    </h3>
                    <SubscribeCTA />
                </div>
            </Container>
        </Layout>
    );
};

export default Home;
