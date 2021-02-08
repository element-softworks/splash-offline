import React, { Fragment } from 'react';
import '@styles/styles.scss';
import styles from './styles.module.scss';
import Logo from '@images/logo.svg';
import SEO from '@components/SEO';
import Layout from '@components/Layout';
import Hero from '@components/Hero';
import Winners from '@components/Winners';
import { graphql, useStaticQuery } from 'gatsby';

const Home = () => {
    return (
        <Layout header={false}>
            <SEO />
            <Hero />
            <Winners />
        </Layout>
    );
};

export default Home;
