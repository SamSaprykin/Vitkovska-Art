import { graphql, useStaticQuery } from "gatsby";

const useLatestArts = () => {
  const { allContentfulArt } = useStaticQuery(
    graphql`
      query {
        allContentfulArt(limit: 7, sort: { fields: createdAt, order: DESC }) {
          edges {
            node {
              id
              artName
              category
              artImage {
                gatsbyImageData
              }
            }
          }
        }
      }
    `,
  );

  return allContentfulArt;
};
export default useLatestArts;
