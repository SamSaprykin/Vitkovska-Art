import { graphql, useStaticQuery } from "gatsby";

const useAllArts = () => {
  const { allContentfulArt } = useStaticQuery(
    graphql`
      query {
        allContentfulArt(limit: 20, sort: { fields: createdAt, order: DESC }) {
          edges {
            node {
              id
              artName
              category
              artImage {
                gatsbyImageData(width: 500, resizingBehavior: FILL)
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
