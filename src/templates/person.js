import React from 'react'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import get from 'lodash/get'

class PersonTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = get(this.props, 'data.site.siteMetadata.title')

    return (
      <div className="person">
        <div className="inner">
          <Helmet title={`${post.frontmatter.title} | ${siteTitle}`} />
          <h1>{post.frontmatter.title}</h1>
          <img src={post.frontmatter.headshotUrl} alt="" />
          <p>
            {post.frontmatter.date}
            {}
          </p>
          <div dangerouslySetInnerHTML={{ __html: post.html }} />
          <hr/>
        </div>
      </div>
    )
  }
}

export default PersonTemplate

export const pageQuery = graphql`
  query PersonByPath($path: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      id
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        twitter
        headshotUrl
      }
    }
  }
`
