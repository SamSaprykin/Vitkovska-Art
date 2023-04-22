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
  console.log(allArts.data.allContentfulArt.edges);
  allArts.data.allContentfulArt.edges.forEach((art) => {
    art.node.category && categorySet.add(art.node.category);
  });
  const artsCategoryList = Array.from(categorySet);
  const artCategoryListingTemplate = require.resolve(
    "./src/templates/art-category.js",
  );
  console.log(categorySet);
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
