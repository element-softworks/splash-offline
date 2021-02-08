import React, { Fragment } from 'react';
import SVG from 'react-inlinesvg';
import '@styles/styles.scss';
import styles from './styles.module.scss';
import { graphql, useStaticQuery } from 'gatsby';
import Container from '@components/Container';
import SubscribeCTA from '@components/SubscribeCTA';

const Hero = () => {
    const heroData = useStaticQuery(graphql`
        query hero {
            allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/home/" } }) {
                edges {
                    node {
                        frontmatter {
                            title: home_title
                            background: home_bg {
                                publicURL
                            }
                            halo: home_bg_dark {
                                publicURL
                            }
                            logo: home_logo {
                                publicURL
                            }
                        }
                    }
                }
            }
        }
    `);
    const data = heroData?.allMarkdownRemark?.edges?.[0]?.node?.frontmatter;

    return (
        <section className={styles.heroWrapper}>
            <div
                className={styles.heroContainer}
                style={{
                    backgroundImage: `url(${data?.background?.publicURL}`,
                }}
            >
                <Container>
                    <div
                        className={styles.heroHeading}
                        style={{
                            backgroundImage: `url(${data?.halo?.publicURL}`,
                        }}
                    >
                        <div className={styles.headingTop}>
                            <SVG alt="Logo" src={data?.logo?.publicURL} />
                            <p>
                                The Annual Community Voted Awards That Spotlight <br />
                                the worlds best Firearm-centric content creators & influencers
                            </p>
                            <hr />
                            <p>
                                Thank you for your great a 2021. See you all for the 2022 Gundies.
                            </p>
                            <p className={styles.textLight}>
                                For any enquires please contact team@thegundies.com
                            </p>
                        </div>
                        {/*<div className={styles.headingBottom}>*/}
                        {/*    <p>*/}
                        {/*        Subscribe to our mailing list to be the first to know about the*/}
                        {/*        Gundies 2022.*/}
                        {/*    </p>*/}
                        {/*    <SubscribeCTA />*/}
                        {/*</div>*/}
                    </div>
                </Container>
            </div>
        </section>
    );
};

export default Hero;
