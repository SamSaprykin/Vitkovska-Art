import { graphql, useStaticQuery } from "gatsby";

const useArtsColumns = () => {
  const { contentfulImagesColumnsSection } = useStaticQuery(
    graphql`
      query {
        contentfulImagesColumnsSection(title: { eq: "Arts" }) {
          id
          imagesColumns {
            columnName
            art {
              artImage {
                gatsbyImageData(layout: CONSTRAINED, formats: WEBP, width: 1200)
                filename
              }
            }
          }
        }
      }
    `,
  );

  return contentfulImagesColumnsSection;
};
export default useArtsColumns;
