import React, { Fragment } from 'react';
import '@styles/styles.scss';
import styles from './styles.module.scss';
import Container from '@components/Container';
import WinnerCard from '@components/WinnerCard';

const Winners = () => {
    return (
        <section>
            <Container>
                <h3>The Gundies 2021 Winners</h3>
                <WinnerCard />
            </Container>
        </section>
    );
};

export default Winners;
