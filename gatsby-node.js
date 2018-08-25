/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const Promise = require("bluebird");
const path = require("path");
const { createFilePath } = require("gatsby-source-filesystem");

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  const createCustomPage = (elements, type, template) => (
    elements.forEach((element, index) => {
      const slug = element.node.fields.slug;
      const previous = index === elements.length - 1 ? null : elements[index + 1].node;
      const next = index === 0 ? null : elements[index - 1].node;

      createPage({
        path: type + element.node.fields.slug,
        component: template,
        context: {
          slug: slug,
          previous,
          next
        }
      });
    })
  );

  return new Promise((resolve, reject) => {
    resolve(
      graphql(
        `
        {
          portfolio: allMarkdownRemark(
            filter: {fileAbsolutePath: {regex: "/portfolio/"}},
            sort: {fields: [frontmatter___date], order: DESC})
          {
            edges {
              node {
                fields {
                  slug
                }
                frontmatter {
                  date(formatString: "DD MMMM YYYY")
                }
              }
            }
          }
          allFile(filter: {
            sourceInstanceName: {eq: "portfolio"},
            internal: {mediaType: {eq: "image/jpeg"}}
          }) {
            edges {
              node {
                childImageSharp {
                  resize(width: 1000, quality: 85) {
                    src
                  }
                }
              }
            }
          }
        }
        `
      ).then(result => {
        if (result.errors) {
          console.log(result.errors);
          reject(result.errors);
        }

        const portfolioTemplate = path.resolve("./src/templates/portfolioElementTemplate.js");

        const portfolioElements = result.data.portfolio.edges;

        createCustomPage(portfolioElements, "/portfolio", portfolioTemplate);
      })
    );
  });
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node.internal.type === `MarkdownRemark`) {
    createNodeField({
      name: "slug",
      node,
      value: createFilePath({ node, getNode })
    });
  }
};