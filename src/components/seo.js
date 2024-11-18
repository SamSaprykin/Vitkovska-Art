/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";
import usePreviewImage from "../hooks/usePreviewImage";

function SEO({ lang, meta, title, titleTemplate, url }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `,
  );
  const previewImage = usePreviewImage();

  const description =
    "Welcome to the portfolio website of Vitkovska Kateryna, a talented freelance digital artist. Explore a captivating collection of digital artworks, illustrations, and designs created with a unique blend of creativity and technical expertise. Vitkovskaya Kateryna specializes in fantasy arts, delivering captivating visuals for a diverse range of projects. Hire Vitkovskaya Kateryna for your next creative endeavor or simply immerse yourself in the captivating world of digital art.";
  const metaDescription = description || site.siteMetadata.description;

  const seoKeywords = [
    "freelance digital artist, digital art, illustrations, designs, creative, portfolio, fantasy, hire, artwork, projects",
  ];
  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={titleTemplate}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: description,
        },
        {
          property: `og:image`,
          content: previewImage.file.url,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          property: `og:url`,
          content: url,
        },
        {
          name: `twitter:card`,
          content: `summary_large_image`,
        },
        {
          name: `twitter:description`,
          content: description,
        },
        {
          property: `twitter:image`,
          content: previewImage.file.url,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata?.author || ``,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ]
        .concat(
          seoKeywords.length > 0
            ? {
                name: `keywords`,
                content: seoKeywords?.join(`, `),
              }
            : [],
        )
        .concat(meta)}
    />
  );
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
};

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
};

export default SEO;
