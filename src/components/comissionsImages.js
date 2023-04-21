import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import React from "react";

function CommissionsImage(props) {
  const Images = useStaticQuery(graphql`
    query HeroImages {
      architecture: file(relativePath: { eq: "comissions/winter-castle.jpg" }) {
        childImageSharp {
          gatsbyImageData(
            width: 200
            placeholder: NONE
            webpOptions: { quality: 100 }
          )
        }
      }
      backgrounds: file(relativePath: { eq: "comissions/pink-rock.jpg" }) {
        childImageSharp {
          gatsbyImageData(
            width: 200
            placeholder: NONE
            webpOptions: { quality: 100 }
          )
        }
      }
      scenery: file(relativePath: { eq: "comissions/tree-repaint.jpg" }) {
        childImageSharp {
          gatsbyImageData(
            width: 200
            placeholder: NONE
            webpOptions: { quality: 100 }
          )
        }
      }
      nature: file(relativePath: { eq: "comissions/waterfall.jpg" }) {
        childImageSharp {
          gatsbyImageData(
            width: 200
            placeholder: NONE
            webpOptions: { quality: 100 }
          )
        }
      }
      characters: file(relativePath: { eq: "comissions/wooden-gate.jpg" }) {
        childImageSharp {
          gatsbyImageData(
            width: 200
            placeholder: NONE
            webpOptions: { quality: 100 }
          )
        }
      }
    }
  `);

  const { url, altText, commissionName } = props;
  const styles = {};

  if (url) {
    return <img style={styles} src={url} alt={altText} />;
  }
  const image = getImage(Images[commissionName]);

  return <GatsbyImage image={image} alt={altText} style={styles} />;
}

export default CommissionsImage;
