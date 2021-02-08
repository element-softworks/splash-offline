import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import style from './styles.module.scss';
import Layout from '@components/Layout';
import Container from '@components/Container';

const TermsAndConditions = () => {
    const {
        TC: { frontmatter },
    } = useStaticQuery(graphql`
        query TC {
            TC: markdownRemark(fileAbsolutePath: { regex: "/terms-and-conditions/" }) {
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
                    <div className={style.termsMain}>
                        <h1>Terms & Conditions</h1>
                        <div dangerouslySetInnerHTML={{ __html: frontmatter.text }}></div>
                    </div>
                </div>
            </Container>
        </Layout>
    );
};

export default TermsAndConditions;
