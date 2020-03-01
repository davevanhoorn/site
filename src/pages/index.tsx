import React, { FunctionComponent } from "react"
import { graphql } from "gatsby"

import Wrapper from "../components/atoms/wrapper"
import SEO from "../components/atoms/seo"
import ExcerptWrapper from "../components/excerpt/excerptWrapper"
import { TPost } from "../components/post/postTypes"
import Hero from "../components/hero/Hero"

type TIndexPageProps = {
  data: {
    posts: {
      edges: TPost[]
    }
  }
}

export const query = graphql`
  query MyQuery {
    posts: allSanityPost(
      sort: { fields: publishedAt, order: DESC }
      filter: { mainImage: { _key: {}, _type: { eq: "image" } } }
    ) {
      edges {
        node {
          id
          title
          excerpt
          slug {
            current
          }
          language {
            slug
          }
          publishedAt
        }
      }
    }
  }
`

const IndexPage: FunctionComponent<TIndexPageProps> = ({ data }) => {
  return (
    <Wrapper>
      <SEO
        title="Freelance React Developer"
        description="Freelance React Developer available for remote work"
      />
      <Hero />
      {data.posts.edges && <ExcerptWrapper posts={data.posts.edges} />}
    </Wrapper>
  )
}

export default IndexPage
