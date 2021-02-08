import React, { Fragment } from 'react';
import '@styles/styles.scss';
import styles from './styles.module.scss';
import Container from '@components/Container';
import WinnerCard from '@components/WinnerCard';
import { graphql, useStaticQuery } from 'gatsby';

const Winners = () => {
    const winnersData = useStaticQuery(graphql`
        query winners {
            allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/winners/" } }) {
                edges {
                    node {
                        frontmatter {
                            winner {
                                category: winner_category
                                name: winner_name
                                link: winner_link
                                avatar: winner_avatar {
                                    childImageSharp {
                                        fluid(maxWidth: 600) {
                                            ...GatsbyImageSharpFluid
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    `);
    const data = winnersData?.allMarkdownRemark?.edges?.[0]?.node?.frontmatter;
    return (
        <section className={styles.winnersWrapper}>
            <Container>
                <h3>The Gundies 2021 Winners</h3>
                <div className={styles.winnersContainer}>
                    {data?.winner?.map(winner => (
                        <a href={winner?.link} rel="noopener noreferrer">
                            <WinnerCard
                                key={winner?.category}
                                category={winner?.category}
                                name={winner?.name}
                                avatar={winner?.avatar}
                            />
                        </a>
                    ))}
                </div>
            </Container>
        </section>
    );
};

export default Winners;
