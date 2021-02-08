import React, { Fragment } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import SVG from 'react-inlinesvg';
import '@styles/styles.scss';
import styles from './styles.module.scss';

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

    return (
        <header className={styles.headerWrapper}>
            <div className={styles.headerContainer}>
                <div className={styles.headerLogoContainer}>
                    <SVG alt="Logo" src={data?.logo?.publicURL} />
                </div>
                <div></div>
            </div>
        </header>
    );
};

export default Header;
