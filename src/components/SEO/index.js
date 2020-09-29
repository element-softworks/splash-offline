import React from 'react';
import { Helmet } from 'react-helmet';
import { graphql, useStaticQuery } from 'gatsby';

const SEO = (config = {}) => {
    const {
        site: {
            siteMetadata: { title, titleTemplate, description, url, image, twitterUsername },
        },
    } = useStaticQuery(graphql`
        query SEOQuery {
            site {
                siteMetadata {
                    title
                    titleTemplate
                    description
                    url
                    image
                    twitterUsername
                }
            }
        }
    `);

    const initialConfig = {
        htmlAttributes: { lang: 'en' },
        title,
        titleTemplate,
        image,
        twitterUsername,
        meta: [
            {
                name: 'description',
                content: description,
            },
        ],
    };

    const data = { ...initialConfig, ...config };

    return (
        <Helmet defaultTitle={title} titleTemplate={titleTemplate}>
            <title itemProp="name" lang="en">
                {config.title}
            </title>
            <meta name="description" content={data.description} />
            <meta name="image" content={data.image} />
            {!!data.url && <meta property="og:url" content={data.url} />}
            {!!data.article && <meta property="og:type" content="article" />}
            {!!data.title && <meta property="og:title" content={data.title} />}
            {!!data.description && <meta property="og:description" content={data.description} />}
            {!!data.image && <meta property="og:image" content={data.image} />}
            <meta name="twitter:card" content="summary_large_image" />
            {!!data.twitterUsername && (
                <meta name="twitter:creator" content={data.twitterUsername} />
            )}
            {!!data.title && <meta name="twitter:title" content={data.title} />}
            {!!data.description && <meta name="twitter:description" content={data.description} />}
            {!!data.image && <meta name="twitter:image" content={data.image} />}
        </Helmet>
    );
};

export default SEO;
