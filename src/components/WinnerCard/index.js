import React, { Fragment } from 'react';
import Img from 'gatsby-image';
import '@styles/styles.scss';
import styles from './styles.module.scss';
import Container from '@components/Container';

const WinnerCard = ({ category, avatar, name }) => {
    return (
        <div className={styles.winnerCardWrapper}>
            <div className={styles.winnerCardImage}>
                <Img fluid={avatar?.childImageSharp?.fluid} />
            </div>
            <div className={styles.winnerCardContent}>
                <h3>{name}</h3>
                <p>Influencer Prize Winner</p>
                <p>
                    Category: <span>{category}</span>
                </p>
            </div>
        </div>
    );
};

export default WinnerCard;
