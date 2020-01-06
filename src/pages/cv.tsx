import React, { FunctionComponent } from "react"

import Wrapper from "../components/atoms/wrapper"
import SEO from "../components/atoms/seo"

import CvWrapper from "../components/cv/cvWrapper"

const IndexPage: FunctionComponent = () => {
  return (
    <Wrapper>
      <SEO
        title="Personal details and work experience"
        description="C.V. of freelance React and TypeScript developer in Utrecht, the Netherlands"
      />
      <CvWrapper />
    </Wrapper>
  )
}

export default IndexPage
