import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import style from './styles.module.scss';
import Layout from '@components/Layout';
import Container from '@components/Container';

const PrivacyPolicy = () => {
    const {
        TC: { frontmatter },
    } = useStaticQuery(graphql`
        query Privacy {
            TC: markdownRemark(fileAbsolutePath: { regex: "/privacy-policy/" }) {
                frontmatter {
                    text
                }
            }
        }
    `);
    return (
        <Layout>
            <Container>
                <div className="bg-container text-secondary">
                    <div className={style.privacyMain}>
                        <h1>Privacy Policy</h1>

                        <div dangerouslySetInnerHTML={{ __html: frontmatter.text }} />
                    </div>
                </div>
            </Container>
        </Layout>
    );
};

export default PrivacyPolicy;
