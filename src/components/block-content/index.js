import BaseBlockContent from "@sanity/block-content-to-react"
import React from "react"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { xonokai } from "react-syntax-highlighter/dist/esm/styles/prism"

const serializers = {
  list: ({ children }) => (
    <ul className="lg:text-lg py-2 leading-relaxed text-gray-700 list-disc pl-8">
      {children}
    </ul>
  ),
  types: {
    code: ({ node = {} }) => {
      const { code, language } = node
      if (!code) {
        return null
      }
      return (
        <SyntaxHighlighter
          showLineNumbers="true"
          style={xonokai}
          language={language}
          className="my-4 syntax-highlighter-custom"
        >
          {code}
        </SyntaxHighlighter>
      )
    },
    block(props) {
      switch (props.node.style) {
        case "h1":
          return (
            <h1 className="text-5xl lg:text-6xl text-gray-800 font-bold leading-tight mb-2">
              {props.children}
            </h1>
          )

        case "h2":
          return (
            <h2 className="text-3xl lg:text-4xl text-gray-800 font-semibold mt-4 leading-tight">
              {props.children}
            </h2>
          )

        case "h3":
          return (
            <h3 className="text-3xl lg:text-4xl text-gray-800 font-semibold mt-4 leading-tight">
              {props.children}
            </h3>
          )

        case "h4":
          return (
            <h4 className="text-3xl lg:text-4xl text-gray-800 font-semibold mt-4 leading-tight">
              {props.children}
            </h4>
          )

        case "ul":
          return (
            <ul className="lg:text-lg py-2 leading-relaxed text-gray-700 list-disc">
              {props.children}
            </ul>
          )

        default:
          return (
            <p className="lg:text-lg py-2 leading-relaxed text-gray-700">
              {props.children}
            </p>
          )
      }
    },
  },
}

const BlockContent = ({ blocks }) => (
  <BaseBlockContent blocks={blocks} serializers={serializers} />
)

export default BlockContent
