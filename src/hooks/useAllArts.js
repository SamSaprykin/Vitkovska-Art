import { graphql, useStaticQuery } from "gatsby";

const useAllArts = () => {
  const { allContentfulArt } = useStaticQuery(
    graphql`
      query {
        allContentfulArt(limit: 40, sort: { fields: createdAt, order: DESC }) {
          edges {
            node {
              id
              artName
              category
              artImage {
                gatsbyImageData(width: 600)
              }
            }
          }
        }
      }
    `,
  );

  return allContentfulArt;
};
export default useAllArts;
