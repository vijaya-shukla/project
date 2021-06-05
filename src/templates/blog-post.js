import React from "react"
import { Link, graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Layout from "../components/layout"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.mdx /* constructor */
    const { previous, next } = this.props.pageContext

    return (
      <Layout>
        {post.frontmatter.image ? (
          <GatsbyImage
            style={{ height: "auto", width: "100%" }}
            image={getImage(post.frontmatter.image.childImageSharp)}
            alt={post.frontmatter.title}
          />
        ) : (
          <div style={{ height: "250px" }}></div>
        )}
        <div className="container py-5">
          <h1>{post.frontmatter.title}</h1>
          <p>
            Written By:{" "}
            <span className="font-weight-bold text-danger">
              {post.frontmatter.author}
            </span>{" "}
            on {post.frontmatter.date}
          </p>
          {post.frontmatter.tags.map((tag, index) => (
            <button
              className="btn btn-primary btn-sm m-1"
              index={index}
              key={tag}
            >
              {tag}
            </button>
          ))}
          <MDXRenderer>{post.body}</MDXRenderer>

          <ul>
            <li>
              {previous && (
                <Link to={`/blog${previous.fields.slug}`} rel="prev">
                  ← {previous.frontmatter.title}
                </Link>
              )}
            </li>
            <li>
              {next && (
                <Link to={`/blog${next.fields.slug}`} rel="next">
                  {next.frontmatter.title} →
                </Link>
              )}
            </li>
          </ul>
        </div>
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      excerpt(pruneLength: 160)
      body
      frontmatter {
        title
        date
        tags
        author
        image {
          childImageSharp {
            gatsbyImageData(
              width: 1200
              placeholder: BLURRED
              layout: CONSTRAINED
            )
          }
        }
      }
    }
  }
`
