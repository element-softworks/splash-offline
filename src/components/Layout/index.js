import React, { Fragment } from 'react';
import { config } from '@fortawesome/fontawesome-svg-core';
import { library } from '@fortawesome/fontawesome-svg-core';
import '@styles/styles.scss';
import styles from './styles.module.scss';
import Footer from '@components/Footer';

import { faLinkedin, faFacebook, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';

library.add(faLinkedin, faFacebook, faInstagram, faYoutube);
const Layout = ({ homepage = false, children }) => {
    return (
        <div className={styles.layout}>
            <main>{children}</main>
            <footer>
                <Footer />
            </footer>
        </div>
    );
};

export default Layout;
