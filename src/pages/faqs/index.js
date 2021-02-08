import React from 'react';
import { graphql } from 'gatsby';
import Layout from '@components/Layout';
import styles from './styles.module.scss';
import Container from '@components/Container';

const Faqs = ({
    data: {
        page: {
            frontmatter: { text },
        },
    },
}) => {
    return (
        <Layout>
            <Container>
                <div className={styles.faqContainer}>
                    <div className={styles.faqBody}>
                        <h1>FAQ</h1>
                        {!!text && <div dangerouslySetInnerHTML={{ __html: text }} />}
                    </div>
                </div>
            </Container>
        </Layout>
    );
};

// export const query = graphql`
// 	query Faqs($path: String!) {
// 		page: markdownRemark(frontmatter: { path: { eq: $path } }) {
// 			frontmatter {
// 				sections {
// 					title
// 					description
// 					questions {
// 						question
// 						answer
// 					}
// 				}
// 			}
// 		}
// 	}
// `;

export const query = graphql`
    query Faqs($path: String!) {
        page: markdownRemark(frontmatter: { path: { eq: $path } }) {
            frontmatter {
                text: faq_text
            }
        }
    }
`;

export default Faqs;
