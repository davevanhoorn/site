import BaseBlockContent from "@sanity/block-content-to-react"
import React from "react"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import lineTagPropsFunction from "react-syntax-highlighter"
import { xonokai } from "react-syntax-highlighter/dist/esm/styles/prism"

import { urlFor } from "../../helpers/helpers"

import styles from "./index.module.css"
const serializers = {
  list: ({ children }: { children: any }) => <ul>{children}</ul>,
  types: {
    image: ({ node }: { node: any }) => {
      const { asset, caption } = node
      return (
        <figure className={styles.postFigure}>
          <img
            src={urlFor(asset._ref)
              .width(968)
              .url()}
            alt={caption}
          />
          {caption && (
            <figcaption className={styles.postFigCaption}>{caption}</figcaption>
          )}
        </figure>
      )
    },
    code: ({ node }: { node: any }) => {
      const { code, language } = node
      let highlightedLines: number[] = []
      if (!code) {
        return null
      }
      if (node.highlightedLines) {
        highlightedLines = node.highlightedLines
      }
      return (
        <SyntaxHighlighter
          showLineNumbers={true}
          style={xonokai}
          language={language}
          className={styles.postSyntax}
          wrapLines={true}
          lineProps={(lineNumber: number) => ({
            className:
              highlightedLines.length && !highlightedLines.includes(lineNumber)
                ? "greyscale"
                : "",
          })}
        >
          {code}
        </SyntaxHighlighter>
      )
    },
    block(props: any) {
      switch (props.node.style) {
        case "h1":
          return <h1>{props.children}</h1>

        case "h2":
          return <h2>{props.children}</h2>

        case "h3":
          return <h3>{props.children}</h3>

        case "h4":
          return <h4>{props.children}</h4>

        case "ul":
          return <ul>{props.children}</ul>

        default:
          return <p>{props.children}</p>
      }
    },
  },
}

const BlockContent = ({ blocks }: { blocks: any }) => (
  <BaseBlockContent blocks={blocks} serializers={serializers} />
)

export default BlockContent
