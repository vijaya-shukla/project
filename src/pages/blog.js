import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

export default function Blog({ data }) {
  const { edges: posts } = data.allMdx
  return (
    <Layout>
      <div className="container py-5">
        <div className="row">
          {posts
            .filter(post => post.node.frontmatter.title.length > 0)
            .map(({ node: post }) => {
              return (
                <div className="col-lg-4">
                  <div class="card shadow mb-4">
                    {post.frontmatter.image ? (
                      <GatsbyImage
                        className="card-img"
                        image={getImage(post.frontmatter.image.childImageSharp)}
                        alt={post.frontmatter.title}
                      />
                    ) : (
                      <div style={{ height: "250px" }}></div>
                    )}
                    <div class="card-body text-center">
                      <h2 class="card-title">{post.frontmatter.title}</h2>
                      <p>
                        Written By:{" "}
                        <span className="font-weight-bold text-danger">
                          {post.frontmatter.author}
                        </span>{" "}
                        on {post.frontmatter.date}
                      </p>
                      <p class="card-text">{post.excerpt}</p>
                      <Link
                        to={`/blog${post.fields.slug}`}
                        class="btn btn-primary"
                      >
                        Read More
                      </Link>
                    </div>
                  </div>
                </div>
              )
            })}
        </div>
      </div>
    </Layout>
  )
}
export const pageQuery = graphql`
  query IndexQuery {
    allMdx(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          fields {
            slug
          }
          excerpt(pruneLength: 250)
          id
          frontmatter {
            title
            date
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
    }
  }
`
