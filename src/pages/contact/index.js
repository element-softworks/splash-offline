import React from 'react';
import { graphql } from 'gatsby';
import Layout from '@components/Layout';
import styles from './styles.module.scss';

const Contact = () => {
    return (
        <Layout>
            <div className={styles.contactContainer}>
                <h1>Contact</h1>
                <div className="my-16">
                    <p>
                        For contacts write an email to:
                        <br />
                        <a
                            href="mailto:team@thegundies.com?subject=Gundies%20Enquiry"
                            rel="noopener noreferrer"
                        >
                            team@thegundies.com
                        </a>
                    </p>
                </div>
            </div>
        </Layout>
    );
};

export default Contact;
