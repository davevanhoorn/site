import React from "react"
import Layout from "../components/layout"
import { Helmet } from "react-helmet"

const About = () => (
  <Layout>
    <Helmet>
      <meta charSet="utf-8" />
      <title>My Title</title>
      <link rel="canonical" href="http://mysite.com/example" />
    </Helmet>
    <div>
      <a href="#test" title="test">
        About
      </a>
    </div>
  </Layout>
)

export default About
