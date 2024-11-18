import { graphql, useStaticQuery } from "gatsby";

const usePreviewImage = () => {
  const { contentfulAsset } = useStaticQuery(
    graphql`
      query {
        contentfulAsset(filename: { eq: "logo w copy.png" }) {
          id
          file {
            url
          }
        }
      }
    `,
  );

  return contentfulAsset;
};
export default usePreviewImage;
