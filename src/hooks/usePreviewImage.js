import { graphql, useStaticQuery } from "gatsby";

const usePreviewImage = () => {
  const { contentfulAsset } = useStaticQuery(
    graphql`
      query {
        contentfulAsset(filename: { eq: "preview-image.jpg" }) {
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
