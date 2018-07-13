const _ = require("lodash")
const Promise = require("bluebird")
const path = require("path")
const select = require(`unist-util-select`)
const fs = require(`fs-extra`)

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators

  return new Promise((resolve, reject) => {
    const pages = []
    const blogPost = path.resolve("./src/templates/blog-post.js")
    const person = path.resolve("./src/templates/person.js")
    const meetup = path.resolve("./src/templates/meetup.js")
    resolve(
      graphql(
        `
      {
        allMarkdownRemark(limit: 1000) {
          edges {
            node {
              frontmatter {
                path,
                twitter
              }
            }
          }
        }
      }
    `
      ).then(result => {
        if (result.errors) {
          console.log(result.errors)
          reject(result.errors)
        }

        // Create blog posts pages.
        _.each(result.data.allMarkdownRemark.edges, edge => {
          switch (edge.node.frontmatter.type) {
            case "person": {
              createPage({
                path: edge.node.frontmatter.path,
                component: person
              })
              break;
            }
            case "meetup": {
              createPage({
                path: edge.node.frontmatter.path,
                component: meetup
              })
              break;
            }
            default: {
              createPage({
                path: edge.node.frontmatter.path,
                component: blogPost
              })
              break;
            }
          }
        })
      })
    )
  })
}
