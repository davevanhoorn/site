import React from "react"
import Layout from "../components/layout"
import { Helmet } from "react-helmet"
import PostCard from "../components/blog/postCard"
import { graphql } from "gatsby"
import { mapEdgesToNodes } from "../lib/helpers"

export const query = graphql`
  query postQuery {
    posts: allSanityPost {
      edges {
        node {
          id
          title
          publishedAt(formatString: "DD-MM-YYYY")
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
        <title>Front-End Development Tips & Tricks 💯| Dave van Hoorn</title>
        <meta
          name="description"
          content="Personal Front-End Development tips, tricks and stories from Dave van Hoorn, developer at Capgemini Netherlands."
        />
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
