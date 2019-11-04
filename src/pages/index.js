import React from "react"
import Layout from "../components/layout"
import { Helmet } from "react-helmet"
import PostCard from "../components/blog/postCard"
import { graphql } from "gatsby"
import { mapEdgesToNodes } from "../lib/helpers"

export const query = graphql`
  query postQuery {
    posts: allSanityPost(sort: { fields: [publishedAt], order: DESC }) {
      edges {
        node {
          id
          title
          publishedAt
          excerpt
          author {
            name
            image {
              asset {
                fluid(maxWidth: 160) {
                  ...GatsbySanityImageFluid
                }
              }
            }
          }
          categories {
            _id
            title
          }
          mainImage {
            asset {
              fluid(maxWidth: 384) {
                ...GatsbySanityImageFluid
              }
            }
          }
          slug {
            current
          }
        }
      }
    }
  }
`

const Blog = props => {
  const { data } = props
  const postNodes = data && data.posts && mapEdgesToNodes(data.posts)
  return (
    <Layout>
      <Helmet>
        <html lang="nl" />
        <title>React Front-End Developer → Dave van Hoorn</title>
      </Helmet>
      <section>
        {postNodes.map(post => (
          <PostCard data={post} key={post.id} />
        ))}
      </section>
    </Layout>
  )
}

export default Blog
