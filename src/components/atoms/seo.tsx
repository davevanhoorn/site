import React, { FunctionComponent } from "react"
import Helmet from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

import { TSiteMetaData } from "./seoTypes"

type TSeoProps = {
  lang?: string
  title: string
  description: string
  meta?: []
  imageUrl?: any
  postUrl?: string
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
  imageUrl,
  postUrl,
}) => {
  const { site }: TStaticQuery = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            url
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description

  const metaTags = [
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
      property: `og:site_name`,
      content: `${site.siteMetadata.title} ${site.siteMetadata.description}`,
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
  ].concat(meta)

  if (imageUrl) {
    metaTags.push({
      name: `og:image`,
      content: imageUrl,
    })
  }

  if (postUrl) {
    metaTags.push({
      name: `og:url`,
      content: `${site.siteMetadata.url}/${postUrl}`,
    })
  }

  console.log(metaTags)

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      meta={metaTags}
    />
  )
}

export default SEO
