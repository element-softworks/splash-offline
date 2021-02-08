import React, { Fragment } from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';
import SVG from 'react-inlinesvg';
import '@styles/styles.scss';
import styles from './styles.module.scss';
import useCountdown from '@helpers/useCountdown';

const Header = () => {
    const logo = useStaticQuery(graphql`
        query header {
            allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/home/" } }) {
                edges {
                    node {
                        frontmatter {
                            logo: home_logo {
                                publicURL
                            }
                        }
                    }
                }
            }
        }
    `);
    const data = logo?.allMarkdownRemark?.edges?.[0]?.node?.frontmatter;

    const [timestamp, countdown, ended] = useCountdown(new Date('2021-11-01T00:00:00.000-00:00'), {
        units: { months: true, days: true, hours: true, minutes: true, seconds: true },
    });

    return (
        <header className={styles.headerWrapper}>
            <div className={styles.headerContainer}>
                <div className={styles.headerLogoContainer}>
                    <Link to="/">
                        <SVG alt="Logo" src={data?.logo?.publicURL} />
                    </Link>
                </div>
                {!ended && (
                    <div className={styles.countdownContainer}>
                        <p>Countdown until Gundies v3:</p>
                        <p>{`${countdown?.months?.formatted}m ${countdown?.days?.formatted}d ${countdown?.hours?.formatted}h ${countdown?.minutes?.formatted}m ${countdown?.seconds?.formatted}s`}</p>
                    </div>
                )}
            </div>
        </header>
    );
};

export default Header;
