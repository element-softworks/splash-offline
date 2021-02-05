import React, { Fragment } from 'react';
import '@styles/styles.scss';
import styles from './styles.module.scss';
import SEO from '@components/SEO';
import { graphql, useStaticQuery } from 'gatsby';

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
                        }
                    }
                }
            }
        }
    `);

    console.log(heroData);
    return (
        <section className={styles.heroWrapper}>
            <div
            // style={{
            //     backgroundImage: `url(${imageUrl}`,
            // }}
            >
                Hello friend
            </div>
        </section>
    );
};

export default Hero;
