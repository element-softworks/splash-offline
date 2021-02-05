import React, { Fragment } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '@styles/styles.scss';
import styles from './styles.module.scss';
import Container from '@components/Container';
import { Link } from 'gatsby';

const Footer = () => {
    return (
        <footer className={styles.footerWrapper}>
            <Container>
                <div className={styles.footerContainer}>
                    <div>
                        <p>About</p>
                        <ul>
                            <li>
                                <Link to="/contact">Contact</Link>
                            </li>
                            <li>
                                <Link to="/faq">FAQ</Link>
                            </li>
                            <li>
                                <Link to="/terms-conditions">Terms & Conditions</Link>
                            </li>
                            <li>
                                <Link to="/privacy-policy">Privacy Policy</Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <p>Forge Relations</p>
                        <div className={styles.socialMedia}>
                            <a
                                href="https://www.instagram.com/forgerelations/"
                                rel="noopener noreferrer"
                            >
                                <FontAwesomeIcon
                                    className={styles.fontAwesomeIcon}
                                    icon={['fab', 'instagram']}
                                />
                            </a>
                            <a
                                href="https://www.facebook.com/ForgeRelations/"
                                rel="noopener noreferrer"
                            >
                                <FontAwesomeIcon
                                    className={styles.fontAwesomeIcon}
                                    icon={['fab', 'facebook']}
                                />
                            </a>
                            <a
                                href="https://www.linkedin.com/company/forge-relations"
                                rel="noopener noreferrer"
                            >
                                <FontAwesomeIcon
                                    className={styles.fontAwesomeIcon}
                                    icon={['fab', 'linkedin']}
                                />
                            </a>
                            <a href="/" rel="noopener noreferrer">
                                <FontAwesomeIcon
                                    className={styles.fontAwesomeIcon}
                                    icon={['fab', 'youtube']}
                                />
                            </a>
                        </div>
                        <div className={styles.copyrights}>
                            <a href="https://forgerelations.com/" rel="noopener noreferrer">
                                forgerelations.com
                            </a>
                            <a
                                href="mailto:main@forgerelations.com?subject=Gundies%20Enquiry"
                                className="text-secondary no-underline block mt-2"
                                rel="noopener noreferrer"
                            >
                                main@forgerelations.com
                            </a>
                            <p>Copyright - 2021 Forge Relations</p>
                        </div>
                    </div>
                </div>
            </Container>
        </footer>
    );
};

export default Footer;
