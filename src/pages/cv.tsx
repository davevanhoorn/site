import React, { FunctionComponent } from "react"

import Wrapper from "../components/atoms/wrapper"
import SEO from "../components/atoms/seo"

import CvWrapper from "../components/cv/cvWrapper"

const IndexPage: FunctionComponent = () => {
  return (
    <Wrapper>
      <SEO
        title="C.V."
        description="C.V. of freelance React and TypeScript developer. Aavailable for work."
      />
      <CvWrapper />
    </Wrapper>
  )
}

export default IndexPage
