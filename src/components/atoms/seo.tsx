import React, { FunctionComponent } from "react"
import Helmet from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

import { TSiteMetaData } from "./seoTypes"

type TSeoProps = {
  lang?: string
  title: string
  description: string
  meta?: []
}

type TStaticQuery = {
  site: {
    siteMetadata: TSiteMetaData
  }
}

const SEO: FunctionComponent<TSeoProps> = ({
  lang = "en",
  title,
  description,
  meta = [],
}) => {
  const { site }: TStaticQuery = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.author,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ].concat(meta)}
    />
  )
}

export default SEO
