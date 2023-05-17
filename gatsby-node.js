exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions;

  const allArts = await graphql(
    `
      {
        allContentfulArt {
          edges {
            node {
              id
              category
            }
          }
        }
      }
    `,
  );

  const categorySet = new Set();

  allArts.data.allContentfulArt.edges.forEach((art) => {
    art.node.category && categorySet.add(art.node.category);
  });
  const artsCategoryList = Array.from(categorySet);
  const artCategoryListingTemplate = require.resolve(
    "./src/templates/art-category.js",
  );

  artsCategoryList.forEach((category) => {
    createPage({
      path: `/arts/${category.toLowerCase()}/`,
      component: artCategoryListingTemplate,
      context: {
        categoryList: artsCategoryList,
        category,
      },
    });
  });
};
